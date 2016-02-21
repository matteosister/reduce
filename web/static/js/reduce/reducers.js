import * as actions from "./actions"
const Immutable = require("immutable")
const ShortId = require('shortid')

function counter(state = 0, action) {
  switch(action.type) {
    case actions.INCREMENT:
      return state + 1
      break
    case actions.DECREMENT:
      return state - 1
      break
    default:
      return state
  }
}

function todos(todo_list, action) {
  if (todo_list === undefined) {
    return Immutable.List()
  }
  switch (action.type) {
    case actions.ADD_TODO:
      return todo_list.unshift({id: ShortId.generate(), label: action.payload.label})
      break
    case actions.DELETE_TODO:
      console.log(todo_list)
      let res = todo_list.filter(todo => todo.id !== action.id)
      console.log(res)
      return res
      break
    default:
      return todo_list
  }
}

export function reduce(state = {}, action) {
  return {
    value: counter(state.value, action),
    todos: todos(state.todos, action)
  }
}
