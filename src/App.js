import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import FacebookDashboard from './components/FacebookDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facebook" element={<FacebookDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
