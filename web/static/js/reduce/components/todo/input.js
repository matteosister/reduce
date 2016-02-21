'use strict'

import React from "react"
import Form from 'muicss/lib/react/form';
import Input from "muicss/lib/react/input"
import Button from 'muicss/lib/react/button';
import { connect } from "react-redux"
import { addTodo } from "./../../actions"

const InputFieldView = ({onTodoSubmit}) => (
  <Form inline={true} onSubmit={onTodoSubmit}>
    <Input label="What are you gonna do?" floatingLabel={true} />
    <Button variant="raised">Submit</Button>
  </Form>
)

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoSubmit: (e) => {
      e.preventDefault()
      dispatch(addTodo("test"))
    }
  }
}

const InputField = connect(null, mapDispatchToProps)(InputFieldView)

export default InputField
