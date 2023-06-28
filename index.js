import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css';
import Erreur from './components/Erreur/index'
import Home from  './pages/Home'
import Navbar from './components/Navbar/index'
import Apropos from'./pages/Apropos'
import Logement from './pages/Logement'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/logement/:id" element={<Logement/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


