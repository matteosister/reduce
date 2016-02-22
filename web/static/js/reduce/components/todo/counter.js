'use strict'

import React from "react"
import { connect } from 'react-redux'

let countPhrase = (todos_count) => {
  if (todos_count === 0) {
    return (<div><strong>0</strong> todos</div>)
  } else if (todos_count === 1) {
    return (<div>there is <strong>1</strong> todo</div>)
  } else {
    return (<div>there are <strong>{todos_count}</strong> todos</div>)
  }
}

const CounterView = ({todos_count}) => (
  <div>
    {countPhrase(todos_count)}
  </div>
)

const mapStateToProps = (state) => {
  return {
    todos_count: state.todos.count()
  }
}

const Counter = connect(
  mapStateToProps
)(CounterView)

export default Counter
