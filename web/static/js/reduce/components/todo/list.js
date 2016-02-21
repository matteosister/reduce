'use strict'

import React from "react"
import { connect } from "react-redux"
import Panel from 'muicss/lib/react/panel';

const TodoListView = ({todos}) => (
  <div>
    <h2>todo list</h2>
    {todos.toArray().map((todo) => {
      return <Panel>{todo}</Panel>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

const TodoList = connect(mapStateToProps)(TodoListView)

export default TodoList
