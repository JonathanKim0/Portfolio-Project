import React from 'react'
import '../assets/css/Home.css'
import winnieStretch from '../assets/img/stretch.jpg';

function Header() {
  return (
    <div id='home-div'>
        <p id='home-p'>Hello<br/>I'm Jonathan</p>
        <img id='portrait' src={winnieStretch}></img>
    </div>
  )
}

export default Header