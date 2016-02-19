import {INCREMENT, DECREMENT} from "./actions"
let Immutable = require("immutable")

const initialState = Immutable.Map({value: 0})

export function reduce(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return state.update('value', (v) => { return v + 1 })
      break
    case DECREMENT:
      return state.update('value', (v) => { return v - 1 })
      break
    default:
      return state
  }
  return state
}
