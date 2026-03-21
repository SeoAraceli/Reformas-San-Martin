import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './Home';
import ReformasCocinas from './ReformasCocinas';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reformas-de-cocinas" element={<ReformasCocinas />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
