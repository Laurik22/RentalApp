import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sauna from './pages/sauna';
import Reservations from './pages/Reservations';
import RentalConditions from './pages/RentalConditions';

function App() {

  return (
    <Router>
    <header>
      <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/products/sauna" />} />
          <Route path="/products/:productId" element={<Sauna />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/rentalconditions" element={<RentalConditions/>} />
        </Routes>
      </main>
      <Footer />
  </Router>
  );
}

export default App
