import React from "react"
import Button from "./button"
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from "./../actions"

const CounterView = ({value, onIncrementClick, onDecrementClick}) => (
  <div>
    <h1>Counter</h1>
    <Button label="-" onClick={onDecrementClick} />
    <span>{value}</span>
    <Button label="+" onClick={onIncrementClick} />
  </div>
)

const mapStateToProps = (state) => {
  return {
    value: state.get('value')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementClick: () => {
      dispatch(incrementCounter())
    },
    onDecrementClick: () => {
      dispatch(decrementCounter())
    }
  }
}

const Counter = connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterView)

export default Counter
