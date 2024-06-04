import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  /*const routes = [
    { path: "/home", element: <Home /> },
    { path: "/project", element: <About /> },
    { path: "/", element: <Home /> },
    { path: "/contact", element: <Contact /> }
  ];


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>  
          { routes.map((route, i) => (<Route key={ i } path={ route.path } element={ route.element } />)) }
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );*/
  return(
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
