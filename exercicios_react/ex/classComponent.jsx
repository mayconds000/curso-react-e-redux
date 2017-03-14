import React, { Component } from 'react'

// Caso não quisesse importar o Component bastava eu chamar depois o React.Component
export default class ClassComponent extends Component {
  render() {
    return (
      <h1>{this.props.value}</h1>
    )
  }
}