import React from 'react'
import { NavLink } from "react-router-dom"
// import {HiOutlineMenuAlt4} from 'react-icons/hi'

export default 
function NavBar() {

  return (
    <div>
    <nav className='nav-container'>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/category">Category</NavLink>
        <button className='btn'>Sign In</button>
        {/* <div className='hamburger'><HiOutlineMenuAlt4 /></div> */}
    </nav>
    </div>
    );
}
