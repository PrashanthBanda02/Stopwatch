import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {minutes: 0, seconds: 0, isRunning: false, timerId: null}

  tick = () => {
    const {minutes, seconds} = this.state

    if (seconds < 59) {
      this.setState({seconds: seconds + 1})
    } else {
      this.setState({
        minutes: minutes + 1,
        seconds: 0,
      })
    }
  }

  startTime = () => {
    const {isRunning} = this.state

    if (!isRunning) {
      const newTimerId = setInterval(this.tick, 1000)
      this.setState({isRunning: true, timerId: newTimerId})
    }
  }

  pauseTime = () => {
    const {timerId} = this.state

    if (timerId !== null) {
      clearInterval(timerId)
      this.setState({
        isRunning: false,
        timerId: null,
      })
    }
  }

  resetTime = () => {
    this.pauseTime()
    this.setState({minutes: 0, seconds: 0, isRunning: false})
  }

  render() {
    const {minutes, seconds} = this.state

    return (
      <div className="app-container">
        <h1 className="app-title">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="icon-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-icon"
            />
            <p className="icon-name">Timer</p>
          </div>
          <h1 className="time">
            {minutes < 10 ? `0${minutes}` : minutes}:
            {seconds < 10 ? `0${seconds}` : seconds}
          </h1>
          <div className="buttons-container">
            <button
              onClick={this.startTime}
              type="button"
              className="button start-btn"
            >
              Start
            </button>
            <button
              onClick={this.pauseTime}
              type="button"
              className="button stop-btn"
            >
              Stop
            </button>
            <button
              onClick={this.resetTime}
              type="button"
              className="button restart-btn"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
