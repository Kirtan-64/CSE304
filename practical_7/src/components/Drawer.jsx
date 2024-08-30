import React from 'react';
import { Link } from 'react-router-dom';

function Drawer({ toggleDrawer }) {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50">
      <div className="p-4">
        <button 
          className="text-xl font-bold mb-6"
          onClick={toggleDrawer}
        >
          ✖
        </button>
        <nav className="space-y-4">
          <Link 
            to="/" 
            className="block text-lg text-gray-700 hover:text-blue-500"
            onClick={toggleDrawer}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="block text-lg text-gray-700 hover:text-blue-500"
            onClick={toggleDrawer}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="block text-lg text-gray-700 hover:text-blue-500"
            onClick={toggleDrawer}
          >
            Contact
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Drawer;
