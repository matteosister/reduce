'use strict'

export const ADD_TODO = "add_todo"
export const DELETE_TODO = "del_todo"

export function addTodo(todoLabel) {
  return {
    type: ADD_TODO,
    payload: {
      label: todoLabel
    }
  }
}

export function removeTodo(id) {
  return {
    type: DELETE_TODO,
    id: id
  }
}
