// Write your code here

import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {counter1: 0, counter2: 0}

  Incrementbanana = () => {
    this.setState(prevState1 => ({counter1: prevState1.counter1 + 1}))
  }

  Incrementmango = () => {
    this.setState(prevState2 => ({counter2: prevState2.counter2 + 1}))
  }

  render() {
    const {counter1, counter2} = this.state
    return (
      <div className="bg-container">
        <div className="CONTAINER">
          <h1 className="heading">
            Bob ate <span className="highlighter">{counter1}</span> mangoes{' '}
            <span className="highlighter">{counter2}</span> bananas
          </h1>
          <div className="buttons-container">
            <div className="Mango-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="IMAGE"
              />
              <button className="button1" onClick={this.Incrementmango}>
                Eat Mango
              </button>
            </div>
            <div className="Banana-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
                className="IMAGE"
              />

              <button className="button2" onClick={this.Incrementbanana}>
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
