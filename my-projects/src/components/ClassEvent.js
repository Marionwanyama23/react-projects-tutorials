import React, { Component } from 'react'
//in event handling a method is used 
class ClassEvent extends Component {
    handleClick () {
        console.log('This button has been clicked ')
    }
  render() {
    return (
      <div>
        <h1>This is a class based event handler </h1>
        <button onClick={this.handleClick}>Click here</button>
      </div>
    )
  }
}

export default ClassEvent;
