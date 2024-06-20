import React from 'react';
import '../assets/css/Navbar.css';

function Navbar() {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='navbar'>
      <a href='#home-div' onClick={(e) => handleScroll(e, 'home-div')}>Home</a>
      <p>|</p>
      <a href='#about-div' onClick={(e) => handleScroll(e, 'about-div')}>About</a>
      <p>|</p>
      <a href='#projects-div' onClick={(e) => handleScroll(e, 'projects-div')}>Projects</a>
      <p>|</p>
      <a href='#contact-div' onClick={(e) => handleScroll(e, 'contact-div')}>Contact</a>
    </div>
  );
}

export default Navbar;