'use strict'

import React, { PropTypes } from "react"
import Form from 'muicss/lib/react/form';
import Input from "muicss/lib/react/input"
import Button from 'muicss/lib/react/button';
import { connect } from "react-redux"
import { addTodo } from "./../../actions"

// const InputFieldView = ({onInputChange}) => (
//   <Form inline={true} onSubmit={(e) => { e.preventDefault() } }>
//     <Input label="What are you gonna do?" onKeyUp={onInputChange} floatingLabel={true} />
//     <Button variant="raised">Submit</Button>
//   </Form>
// )

class InputFieldView extends React.Component {
  constructor() {
    super()
    this.state = {text: ''}
  }
  updateText(e) {
    this.setState({text: e.target.value})
  }
  onKeyUp(e) {
    if (13 === e.keyCode) {
      this.addTodo()
    }
  }
  addTodo() {
    if (this.state.text !== '') {
      this.props.submitTodo(this.state.text)
      this.setState({text: ''})
    }
  }
  render() {
    return (
      <Form inline={true} onSubmit={(e) => { e.preventDefault() } }>
        <Input label="What are you gonna do?" value={this.state.text} onChange={this.updateText.bind(this)} onKeyUp={this.onKeyUp.bind(this)} floatingLabel={true} />
        <Button variant="raised" onClick={this.addTodo.bind(this)}>Submit</Button>
      </Form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

InputFieldView.propTypes = {
  submitTodo: PropTypes.func.isRequired
}

const InputField = connect(null, mapDispatchToProps)(InputFieldView)

export default InputField
