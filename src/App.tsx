import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './pages/Home';
import ReformasCocinas from './pages/ReformasCocinas';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reformas-de-cocinas-san-martin-de-valdeiglesias" element={<ReformasCocinas />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
