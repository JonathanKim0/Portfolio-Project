import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'

function Navbar() {

  return (
    <div className='navbar'>
      <a href='#home-div'>Home</a>
      <p>|</p>
      <a href='#about-div'>About</a>
      <p>|</p>
      <a href='#projects-div'>Projects</a>
      <p>|</p>
      <a href='#contact-div'>Contact</a>
    </div>
  )
}

export default Navbar