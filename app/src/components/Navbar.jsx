import React from 'react'
import Logo from '../assets/img/penguin4k.jpg'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'
function navbar() {
  return (
    <div className='navbar'>
        <div className='leftSide'>
          <Link to='/home'><img src={Logo}/></Link>
        </div>
        <div className='rightSide'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default navbar