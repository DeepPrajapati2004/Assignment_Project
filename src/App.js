import React, { useState } from 'react';
import './App.css'; // Ensure any additional styles, especially for animations, are included here
import Header from './components/Header';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Reviews from './components/Reviews';
import Form from './components/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';

function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/order" element={<Form/>} />
      
    </Routes>
  </Router>
  );
}

export default App;

