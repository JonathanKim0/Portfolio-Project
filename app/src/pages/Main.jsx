import React from 'react'
import '../assets/css/Main.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function Main() {
  return (
    <div className='Main'>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Main