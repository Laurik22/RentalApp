import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sauna from './pages/sauna';
import RentalConditions from './pages/RentalConditions';
import './custom.scss';


function App() {
  
  return (
    <Router>
    <header>
      <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/sauna" />} /> 
          <Route path="/sauna" element={<Sauna />} />
          <Route path="/rentalconditions" element={<RentalConditions/>} />
        </Routes>
      </main>
      <Footer />
  </Router>
  );
}

export default App
