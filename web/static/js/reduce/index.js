'use strict'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { reduce } from './reducers'
import { incrementCounter, decrementCounter } from "./actions"
import Counter from "./components/counter"
import ReactDOM from "react-dom"
import React from "react"

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reduce)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState().toObject())
)

ReactDOM.render(
  <Provider store={store}>
    <Counter/>
  </Provider>,
  document.getElementById("reduce")
)
