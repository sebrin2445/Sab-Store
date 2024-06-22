import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import Vehicles from './pages/Vehicles';
import Property from './pages/Property';
import MobilePhones from './pages/MobilePhones';
import Electronics from './pages/Electronics';
import Furniture from './pages/Furniture';
import HealthBeauty from './pages/HealthBeauty';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/vehicles">Vehicles</Link></li>
            <li><Link to="/property">Property</Link></li>
            <li><Link to="/mobile-phones">Mobile Phones</Link></li>
            <li><Link to="/electronics">Electronics</Link></li>
            <li><Link to="/furniture">Furniture</Link></li>
            <li><Link to="/health-beauty">Health & Beauty</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/property" element={<Property />} />
          <Route path="/mobile-phones" element={<MobilePhones />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/furniture" element={<Furniture />} />
          <Route path="/health-beauty" element={<HealthBeauty />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
