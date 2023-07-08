import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Erreur from './components/Erreur/index'
import Home from  './pages/Home'
import Apropos from'./pages/Apropos'
import Logement from './pages/Logement'
import './App.css'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Erreur />} />
        <Route path="/apropos" element={<Apropos/>} />
        <Route path="/logement/:id" element={<Logement/>} />
      </Routes>
    </Router>
   
    
    </div>
  );
}

export default App;
