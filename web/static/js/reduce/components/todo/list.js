'use strict'

import React from "react"
import { connect } from "react-redux"
import Panel from 'muicss/lib/react/panel';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import { removeTodo } from "./../../actions"

const TodoListView = ({todos, onDeleteTodo}) => (
  <div>
    <h2>todo list</h2>
    {todos.toArray().map((todo) => {
      return <Panel key={todo.id}>
        <Row>
          <Col md="11">{todo.label}</Col>
          <Col md="1"><Button color="danger" onClick={(() => { onDeleteTodo(todo.id) })}>&times;</Button></Col>
        </Row>
      </Panel>
    })}
  </div>
)

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteTodo: (id) => {
      dispatch(removeTodo(id))
    }
  }
}

const TodoList = connect(mapStateToProps, mapDispatchToProps)(TodoListView)

export default TodoList
