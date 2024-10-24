import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import EquipmentList from './pages/EquipmentList'
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />      
      <Route path="/equipmentList" element={<EquipmentList/>} />   
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  </Router>
  );
}

export default App
