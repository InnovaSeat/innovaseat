
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeaturesSection from './components/FeaturesSection';
import Investitori from './pages/Investitori';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<FeaturesSection />} />
          <Route path="/investitori" element={<Investitori />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
