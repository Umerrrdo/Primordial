import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Encryption from './pages/Encryption';
import Decryption from './pages/Decryption';
import Navbar from './components/Navbar';
import Layout from './layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/encrypt" element={<Encryption />} />
          <Route path="/decrypt" element={<Decryption />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
