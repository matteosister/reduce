import React from "react"
import { connect } from 'react-redux'

export default class Button extends React.Component {
  render() {
    return (<button onClick={this.props.onClick}>{this.props.label}</button>)
  }
}
