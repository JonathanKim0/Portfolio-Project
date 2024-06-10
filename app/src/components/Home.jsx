import React from 'react'
import '../assets/css/Home.css'
import winnieImage from '../assets/img/winnie_wink.jpg';

function Header() {
  return (
    <div id='home-div'>
        <p id='home-p'>Hello<br/>I'm Jonathan</p>
        <img id='portrait' src={winnieImage}></img>
    </div>
  )
}

export default Header