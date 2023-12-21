import React, { useState } from 'react'

export default function Profile() {
    const [loggedIn, setLoggedIn] = useState(1);
    return (
        <div>
            {/* if else */}
            {/* {loggedIn?<h1>Profile Components </h1>:<h3>User not LogIn Components </h3>} */}
            {/* multiple if else */}
            {loggedIn == 1 ? <h1>Profile Components </h1>
                : loggedIn == 2 ? <h3>user Only signup but not login</h3>
                :<h3>user not valid</h3>}
        </div>
    )
}
