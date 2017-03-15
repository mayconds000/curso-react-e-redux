import React, { Component } from 'react'

// Caso não quisesse importar o Component bastava eu chamar depois o React.Component
export default class ClassComponent extends Component {
  constructor(props) {
    super(props)
    this.state = { value: props.initialValue }
  }

  sum(delta) {
    this.setState({ value: this.state.value + delta })
  }

  render() {
     return (
      <div>
        <h1>{this.props.label}</h1>
        <h2>{this.state.value}</h2>
        <button onClick={() => this.sum(-1)}>Decrement</button>
        <button onClick={() => this.sum(1)}>Increment</button>
      </div>
    )
  }
}