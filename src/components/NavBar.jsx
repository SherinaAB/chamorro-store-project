import React from 'react'
import { NavLink } from "react-router-dom"

export default 
function NavBar() {

  return (
    <div>
    <nav className='nav-container'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/category">Category</NavLink>
    </nav>
    </div>
    );
}
