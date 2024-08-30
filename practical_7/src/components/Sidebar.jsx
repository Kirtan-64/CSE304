// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-3xl p-2 focus:outline-none"
        onClick={toggleSidebar}
      >
        {isOpen ? <FiX /> : <FiMenu />}
      </button>
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 p-5 transition-transform transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="space-y-4">
          <Link to="/" className="block text-xl hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="block text-xl hover:text-gray-300">
            About
          </Link>
          <Link to="/contact" className="block text-xl hover:text-gray-300">
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Sidebar;
