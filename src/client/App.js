import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import About from './components/About';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  );
};

export default App;
