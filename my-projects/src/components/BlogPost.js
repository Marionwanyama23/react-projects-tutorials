import React, { Component } from 'react'

export default class BlogPost extends Component {
    constructor() {
        super()
        this.state = {clicked : 'true'}
    }
  render() {
    return (
      <div>
        <h1>Blog Post Title</h1>
        <p>Description</p>
        <p>Clicked: {this.state.clicked}</p>
      </div>
    )
  }
}
