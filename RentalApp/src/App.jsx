import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';


function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home/>} />      
      <Route path="/products/:productId" element={<ProductDetail />} />  
    </Routes>
  </Router>
  );
}

export default App
