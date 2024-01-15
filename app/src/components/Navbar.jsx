import React, { useState } from 'react'
import Logo from '../assets/img/penguin4k.jpg'
import { Link } from 'react-router-dom'
import '../assets/css/Navbar.css'
import ReorderIcon from '@mui/icons-material/Reorder';
function Navbar() {

  const [visibleLinks, setVisibleLinks] = useState(false);

  const toggleNavBar = () => {
    setVisibleLinks(!visibleLinks);
  }

  return (
    <div className='navbar'>
        <div className='leftSide' id={visibleLinks ? "visible" : "hidden"}>
          <Link to='/home'><img src={Logo}/></Link>
          <div className='hiddenLinks'>
            <Link to='/home'>Home</Link>
            <Link to='/project'>Project</Link>
            <Link to='/contact'>Contact</Link>
          </div>
        </div>
        <div className='rightSide'>
            <Link to='/home'>Home</Link>
            <Link to='/project'>Project</Link>
            <Link to='/contact'>Contact</Link>
            <button onClick={toggleNavBar}>
              <ReorderIcon />
            </button>
        </div>
    </div>
  )
}

export default Navbar