import React from "react"
import { Button } from "./button"
import { connect } from 'react-redux'

class CounterComponent extends React.Component {
  decrement() {
    console.log('decrement')
  }
  increment() {
    console.log('increment')
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Button label="-" onClick={this.decrement} />
        {this.props.value}
        <Button label="+" onClick={this.increment} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    value: state.value
  }
}

const Counter = connect(mapStateToProps)(CounterComponent)
export default Counter
