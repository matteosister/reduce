'use strict'

export const INCREMENT = "inc"
export const DECREMENT = "dec"
export const ADD_TODO = "add_todo"

export function incrementCounter() {
  return {
    type: INCREMENT
  }
}

export function decrementCounter() {
  return {
    type: DECREMENT
  }
}

export function addTodo(todoLabel) {
  return {
    type: ADD_TODO,
    payload: {
      label: todoLabel
    }
  }
}
