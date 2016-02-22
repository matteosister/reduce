import * as actions from "./actions"
const Immutable = require("immutable")
const ShortId = require('shortid')

function todos(todo_list, action) {
  if (todo_list === undefined) {
    return Immutable.List()
  }
  switch (action.type) {
    case actions.ADD_TODO:
      return todo_list.unshift({id: ShortId.generate(), label: action.payload.label})
      break
    case actions.DELETE_TODO:
      let res = todo_list.filter(todo => todo.id !== action.id)
      return res
      break
    default:
      return todo_list
  }
}

export function reduce(state = {}, action) {
  return {
    todos: todos(state.todos, action)
  }
}
