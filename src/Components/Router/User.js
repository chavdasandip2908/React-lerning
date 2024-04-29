import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const User = () => {
    const params = useParams();
    const { name } = params;

    //  useLocation Hook
    const location = useLocation();
    console.log(location);
    return (
        <div>
            <h1>Welcome, {name}</h1>
        </div>
    )
}

export default User
