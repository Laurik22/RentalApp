import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductDetail from './pages/ProductDetail';
import Reservations from './pages/Reservations';

function App() {

  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/products/:saunaTrailer"/>} />      
      <Route path="/products/:productId" element={<ProductDetail />} />  
      <Route path="/reservations" element={<Reservations />} />  
    </Routes>
  </Router>
  );
}

export default App
