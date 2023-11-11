// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrease = () => {
    this.setState(prevState => ({
      key1: this.prevState.count + 1,
      key2: this.prevState.count + 1,
    }))
  }

  render() {
    const {key1, key2} = state
    return (
      <div className="bg-container1">
        <div className="bg-container2">
          <h1 className="heading">
            Bot ate <span>{key1}</span> mangoes <span>{key2}</span> bananas
          </h1>
          <div className="img-container">
            <div className="fruit-container">
              <img src="" className="fruit-img" alt="mango" />
              <button onClick={this.onIncrease} className="button">
                Eat Mango
              </button>
            </div>
            <div className="fruit-container">
              <img src="" className="fruit-img" alt="banana" />
              <button onClick={this.onIncrease} className="button">
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
