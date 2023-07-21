import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Category from './components/Category';
import NavBar from './components/NavBar';
import CategoryPage from './components/CategoryPage';


function App() {
  return (
  <Router>
    <div className="container">
      {/* <img src="/src/assets/JacobMaddieProposal.jpg"/> */}
      <div className="welcome">
        <h1>Welcome to Proa, Tano' Y Chamorro</h1>
      </div>
      <header className="navbar">
      <NavBar/>
      </header>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/category" element={<Category />}/>
          <Route path="/category/:id" element={<CategoryPage />}/>
        </Routes>
        
        
    </div>
  </Router>  
  )
}

export default App
