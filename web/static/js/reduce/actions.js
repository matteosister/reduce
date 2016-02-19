'use strict'

export const INCREMENT = "inc"
export const DECREMENT = "dec"

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
