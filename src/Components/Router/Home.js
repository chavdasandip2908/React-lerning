import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function Home() {

  {/* Navigating programmatically */ }
  const navigate = useNavigate();
  const navTo = (url) => {
    navigate(url)
  }

  // useLocation Hook
  const location = useLocation();
  console.log(location);


  return (
    <div>
      <h1>Home page</h1>


      {/* Navigating programmatically */}
      <br />
      <button onClick={() => navTo("/about")}>Go About Page</button>
      <br />
      <button onClick={() => navTo("/filter")}>Go Filter Page</button>

    </div>
  )
}

export default Home
