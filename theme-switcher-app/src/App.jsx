// src/App.jsx
import React from 'react';
import useTheme from './hooks/useTheme';
import './App.css';

const App = () => {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="app">
      <div className="theme-container">
        <h1>Theme Switcher</h1>
        <button className="theme-toggle-button" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
        <p>Current theme: <span className="theme-label">{theme}</span></p>
      </div>
    </div>
  );
};

export default App;
