import React from 'react'
import HomeBackground from "../assets/img/jett-background.jpg"
import "../assets/css/Home.css"

function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{backgroundImage: `url(${HomeBackground})`}}>
        <h1> My Website </h1>
        <p> Here is my website! </p>
      </div>
    </div>
  )
}

export default Home