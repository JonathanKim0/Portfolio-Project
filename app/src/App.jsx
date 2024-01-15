import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/Project'
import Home from './pages/Home';
import Footer from './components/Footer';
import Contact from './pages/Contact';


function App() {
  const routes = [
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
  );
}

export default App;
