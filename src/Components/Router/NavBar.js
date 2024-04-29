import React from 'react'
import { NavLink } from 'react-router-dom'
// Link in react 

function NavBar() {
    return (
        // use NavLink and check link active or no 
        <div style={{ display: "flex", justifyContent: "end", gap: "1rem", padding: ".7rem", background: "#e9ecef", width: "100vw" }}>
            <NavLink
                style={({ isActive }) => { return { color: isActive ? "red" : "skyblue" } }} to='/'>Home</NavLink>
            <NavLink
                style={({ isActive }) => { return { color: isActive ? "red" : "skyblue" } }} to='/about'>About</NavLink>
            <NavLink
                style={({ isActive }) => { return { color: isActive ? "red" : "skyblue" } }} to='/filter'>filter</NavLink>
            <NavLink
                style={({ isActive }) => { return { color: isActive ? "red" : "skyblue" } }} to='/login'>Login</NavLink>
        </div>
    )
}

export default NavBar
