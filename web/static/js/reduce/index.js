'use strict'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduce } from './reducers'
import { incrementCounter, decrementCounter } from "./actions"
import Container from 'muicss/lib/react/container'
import Counter from "./components/counter"
import InputField from "./components/todo/input"
import TodoList from "./components/todo/list"
import Divider from 'muicss/lib/react/divider';
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
      <Counter />
      <Divider />
      <InputField />
      <TodoList />
    </Container>
  </Provider>,
  document.getElementById("reduce")
)
