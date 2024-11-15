import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Museum from './pages/Museum';
import Shop from './pages/Shop';
import Support from './pages/Support';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-black text-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path='/Museum' element={<Museum />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path="/support" element={<Support />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;