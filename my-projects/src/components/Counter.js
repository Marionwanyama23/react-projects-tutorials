import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() { //calls constructor for the counter class
        super() //calls base class for the component
        this.state = {
            counter : 0,
        }
        //this.increment = this.increment.bind(this)used tobind this keyword to the method
        //this.decrement = this.decrement.bind(this)

    }
    
    increment = () => {
      console.log(this)
        this.setState({
            counter: this.state.counter + 1
        })
    }

    decrement=()=> {
        this.setState({
            counter: this.state.counter - 1
        })
    }
  render() {
    return (
      <div>
        <h1>The counter number is: {this.state.counter}</h1>
        <button onClick={this.increment}>increment</button>
        <button onClick = {this.decrement}>decrement</button>
      </div>
    )
  }
}
