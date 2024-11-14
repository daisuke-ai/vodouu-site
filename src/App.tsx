import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibition from './pages/Exhibition';
import Museum from './pages/Museum';
import Shop from './pages/Shop';
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-gray-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exhibition" element={<Exhibition />} />
          <Route path='/Museum' element={<Museum />} />
          <Route path='/Shop' element={<Shop />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;