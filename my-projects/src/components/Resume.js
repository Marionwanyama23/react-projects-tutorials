import React, { Component } from 'react'

export default class Resume extends Component {
  render() {
    const {name, age, profession} = this.props
    return (
      <div>
        <h1>Employee: {name} {age} {profession}</h1>
      </div>
    )
  }
}
