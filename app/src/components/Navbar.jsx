import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
function Navbar() {

  return (
    <div className='navbar'>
      <Link to='/home'>Home</Link>
      <p>|</p>
      <Link to='/about'>About</Link>
      <p>|</p>
      <Link to='/project'>Projects</Link>
      <p>|</p>
      <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar