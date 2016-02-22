'use strict'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduce } from './reducers'
import { incrementCounter, decrementCounter } from "./actions"
import Container from 'muicss/lib/react/container'
import Counter from "./components/todo/counter"
import InputField from "./components/todo/input"
import TodoList from "./components/todo/list"
import Divider from 'muicss/lib/react/divider'
import Row from 'muicss/lib/react/row'
import Col from 'muicss/lib/react/col'
import ReactDOM from "react-dom"
import React from "react"

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reduce)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <Container>
      <Row>
        <Col md="6"><InputField /></Col>
        <Col md="6"><Counter /></Col>
      </Row>
      <TodoList />
    </Container>
  </Provider>,
  document.getElementById("reduce")
)
