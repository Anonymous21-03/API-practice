import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='logo'>
        <h2>Weather mania</h2>
      </div>
      <div className='menu'>
        <ul style={{ listStyleType: 'none' }}>
          <li className='item'>
            <Link to='/'>Home</Link>
          </li>
          <li className='item'><Link to='/fiveday'>5 day forecast</Link></li>
            </ul>
      </div>
    </div>
  )
}

export default Navbar
