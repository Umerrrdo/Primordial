import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Encryption from './pages/Encryption';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encrypt" element={<Encryption />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
