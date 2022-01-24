import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  increaseSpeed = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  decreaseSpeed = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="speedometer-app-container">
        <div className="speedometer-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="speedometer-image"
          />
          <h1 className="heading">
            Speed is <span className="speed-count">{speed}</span>mph
          </h1>
          <div>
            <button type="button" onClick={this.increaseSpeed}>
              Accelerate
            </button>
            <button type="button" onClick={this.decreaseSpeed}>
              Apply Breaks
            </button>
            <p className="speed-limit-text">Max speed limit is 200 and Min 0</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
