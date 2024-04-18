import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
      About page
      <br/>
      <Link to='/user/abc'>abc</Link> <br />
      <Link to='/user/anil'>anil</Link>
    </div>
  )
}

export default About
