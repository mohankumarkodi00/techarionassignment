import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}

  onIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 3}))
  }

  onDecrease = () => {
    this.setState(prevState => ({count: prevState.count - 3}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">counter</h1>

        <h1 className="count">{count}</h1>
        <div className="buttons-container">
          <button
            className="button button2"
            type="button"
            onClick={this.onIncrease}
          >
            -
          </button>
          <button
            className="button button1"
            type="button"
            onClick={this.onDecrease}
          >
            +
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
