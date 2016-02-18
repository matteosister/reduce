import { createStore } from 'redux'
import { reduce } from './reducers'
import { incrementCounter, decrementCounter } from "./actions"
import "./components/counter"

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(reduce)

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())
