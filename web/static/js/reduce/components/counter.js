'use strict'

import React from "react"
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Button from 'muicss/lib/react/button';
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from "./../actions"

const CounterView = ({value, onIncrementClick, onDecrementClick}) => (
  <Container>
    <h1>Counter</h1>
    <Row>
      <Col md="1"><Button color="primary" onClick={onDecrementClick}>-</Button></Col>
      <Col md="1" className="mui--text-display2">{value}</Col>
      <Col md="1"><Button color="primary" onClick={onIncrementClick}>+</Button></Col>
    </Row>
  </Container>
)

const mapStateToProps = (state) => {
  return {
    value: state.value
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
