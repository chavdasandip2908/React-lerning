import React, { Component } from 'react'

export default class User2 extends Component {
    constructor(){
        super();
        this.state = {
          email: "Anil@gmail.com",
        }
    }
  render() {
    console.log("render");
    return (
      <div>
        <h1>User Component </h1>
        <h2>name : {this.props.name}</h2>
        <h2>Email : {this.state.email}</h2>
        <button onClick={() => this.setState({email:"sandip@gmail.com"})}>Update Email</button>
      </div>
    )
  }
}
