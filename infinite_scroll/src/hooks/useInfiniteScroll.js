// src/hooks/useInfiniteScroll.js
import { useState, useEffect } from 'react';

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom = window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight;
      if (isBottom && !isFetching) {
        setIsFetching(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFetching]);

  useEffect(() => {
    if (!isFetching) return;

    callback(() => {
      setIsFetching(false);
    });
  }, [isFetching, callback]);

  return [isFetching];
};

export default useInfiniteScroll;
