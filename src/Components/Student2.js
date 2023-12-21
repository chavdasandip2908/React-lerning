import React, { Component } from 'react'

export default class Student2 extends Component {
    componentWillUnmount() {
        console.log("componentWillUnmount called");
        // alert("componentWillUnmount called");
    }
    render() {
        return (
            <div>
                <div>
                    <h1>Student Component </h1>
                </div>
            </div>
        )
    }
}
