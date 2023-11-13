// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoButton = () => {
    this.setState(prevValue => ({mango: prevValue.mango + 1}))
  }

  bananaButton = () => {
    this.setState(prevValue => ({banana: prevValue.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="main-container">
        <div className="sub-container">
          <h1 className="heading-style">
            Bob ate <span className="counter-style">{mango}</span> mangoes{' '}
            <span className="counter-style">{banana}</span> bananas
          </h1>
          <div className="mango-banana-container">
            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image-style"
                alt="mango"
              />
              <button
                className="button-style"
                type="button"
                onClick={this.mangoButton}
              >
                Eat Mango
              </button>
            </div>

            <div className="image-button-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image-style"
                alt="banana"
              />
              <button
                className="button-style"
                type="button"
                onClick={this.bananaButton}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
