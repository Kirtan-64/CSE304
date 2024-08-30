import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Drawer from './components/Drawer';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <Router>
      <div className="relative min-h-screen bg-gray-100">
        <button 
          className="p-2 m-4 bg-blue-500 text-white rounded-lg"
          onClick={toggleDrawer}
        >
          ☰
        </button>
        {isDrawerOpen && <Drawer toggleDrawer={toggleDrawer} />}
        <div className="ml-16 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
