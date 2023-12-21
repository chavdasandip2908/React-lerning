import React from 'react'

export default function User(props) {
    return (
        <div>
            <h1>User Components</h1>
            <button onClick={props.data}>Call Data function</button>
        </div>
    )
}
