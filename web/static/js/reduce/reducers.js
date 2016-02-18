import {INCREMENT, DECREMENT} from "./actions"

const initialState = { value: 0 }

export function reduce(state = initialState, action) {
  switch(action.type) {
    case INCREMENT:
      return Object.assign({}, state, {value: state.value + 1})
      break
    case DECREMENT:
      return Object.assign({}, state, {value: state.value - 1})
      break
    default:
      return state
  }
  return state
}
