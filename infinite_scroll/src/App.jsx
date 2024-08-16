// src/App.jsx
import React, { useState, useCallback } from 'react';
import useInfiniteScroll from './hooks/useInfiniteScroll';
import './App.css';

const App = () => {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`));
  const [isFetching] = useInfiniteScroll(fetchMoreItems);

  function fetchMoreItems(callback) {
    setTimeout(() => {
      setItems(prevItems => [
        ...prevItems,
        ...Array.from({ length: 20 }, (_, i) => `Item ${prevItems.length + i + 1}`)
      ]);
      callback();
    }, 1000);
  }

  return (
    <div className="app">
      <h1>Infinite Scroll Example</h1>
      <div className="grid">
        {items.map((item, index) => (
          <div key={index} className="grid-item">{item}</div>
        ))}
      </div>
      {isFetching && <p className="loading">Loading more items...</p>}
    </div>
  );
};

export default App;
