/* Props With Functional Components   */

// import React from 'react'

// export default function Student(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h3>{props.email}</h3>
//       <button onClick={() => {props.fun(props.name)}}>Hello MSG</button>

//     </div>
//   )
// }

/* Props With Functional Components   */

import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <h3>{this.props.email}</h3>
                <button onClick={() => { this.props.fun(this.props.name) }}>Hello MSG</button>
            </div>
        )
    }
}
