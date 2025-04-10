import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalStorage = (value) => {
    setStoredData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const removeLocalStorage = () => {
    localStorage.removeItem(key);
    setStoredData(null);
  };

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedData));
  }, [key, storedData]);

  return {
    storedData,
    setLocalStorage,
    removeLocalStorage,
  };
};

export default useLocalStorage;
