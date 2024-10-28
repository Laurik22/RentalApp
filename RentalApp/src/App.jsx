import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Reservations from './pages/Reservations';


function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />      
      <Route path="/products/:productId" element={<ProductDetail />} />  
      <Route path="/reservations" element={<Reservations />} />  
    </Routes>
  </Router>
  );
}

export default App
