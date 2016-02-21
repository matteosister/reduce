'use strict'

import React from "react"
import Form from 'muicss/lib/react/form';
import Input from "muicss/lib/react/input"
import Button from 'muicss/lib/react/button';
import { connect } from "react-redux"
import { addTodo } from "./../../actions"

const InputFieldView = ({onInputChange}) => (
  <Form inline={true} onSubmit={(e) => { e.preventDefault() } }>
    <Input label="What are you gonna do?" onKeyUp={onInputChange} floatingLabel={true} />
    <Button variant="raised">Submit</Button>
  </Form>
)

const mapDispatchToProps = (dispatch) => {
  return {
    onInputChange: (e) => {
      if (13 === e.keyCode) {
        dispatch(addTodo(e.target.value))
        e.target.value = ""
      }
      return false
    }
  }
}

const InputField = connect(null, mapDispatchToProps)(InputFieldView)

export default InputField
