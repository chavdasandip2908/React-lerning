import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      About page
      <br/>
      {/* how to pass state in useLocation Hook */}
      <Link to='/user/abc' state={{name:"abc",age:"20"}}>abc</Link> <br />
      <Link to='/user/anil'state={{name:"anil",age:"21"}}>anil</Link>
    </div>
  )
}

export default About
