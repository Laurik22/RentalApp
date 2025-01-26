import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sauna from './pages/sauna';
import RentalConditions from './pages/RentalConditions';
import './custom.scss';
import Instructions from './pages/instructions';

function App() {

  return (
    <Router>
    <header>
      <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Sauna/>} />
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/rentalconditions" element={<RentalConditions/>} />
          <Route path="/instructions" element={<Instructions/>} />
        </Routes>
      </main>
      <Footer />
  </Router>
  );
}

export default App
