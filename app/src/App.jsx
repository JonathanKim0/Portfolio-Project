import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About'
import Home from './pages/Home';
import Footer from './components/Footer';


function App() {
  const routes = [
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/", element: <Home /> },
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
