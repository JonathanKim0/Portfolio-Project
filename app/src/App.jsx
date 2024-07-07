import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from './pages/Main';
import Resume from './pages/Resume';


function App() {
  const routes = [
    { path: "/main", element: <Main /> },
    { path: "/", element: <Main /> },
    { path: "/resume", element: <Resume /> }
  ];


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>  
          { routes.map((route, i) => (<Route key={ i } path={ route.path } element={ route.element } />)) }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
