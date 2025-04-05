import React, { useState } from 'react';

const WithTheme = (WrappedComponent) => {
  // Define the HOC component
  const WithTheme = (props) => {
    // State to manage the current theme
    const [theme, setTheme] = useState('light'); // Default theme is 'light'

    // Function to toggle between light and dark themes
    const toggleTheme = () => {
      setTheme(theme === 'light' ? 'dark' : 'light');
    };

    // Define styles based on the current theme
   const themeStyles = {
     light: {
       textColor: "#333",
       backgroundColor: "#f4f4f4",
       containerStyles: {
         height: "100vh",
         width: "100vw",
         padding: "20px",
       },
       buttonStyles: {
         backgroundColor: "#007bff",
         color: "#fff",
         padding: "10px 20px",
         border: "none",
         cursor: "pointer",
       },
     },
     dark: {
       textColor: "#fff",
       backgroundColor: "#222",
       containerStyles: {
         height: "100vh",
         width: "100vw",
         padding: "20px",
       },
       buttonStyles: {
         backgroundColor: "#6c757d",
         color: "#fff",
         padding: "10px 20px",
         border: "none",
         cursor: "pointer",
       },
     },
   };
    // Pass theme-related props to the wrapped component
    const themedProps = {
      theme,
      toggleTheme,
      ...themeStyles[theme], // Spread theme-specific styles
    };

    return <WrappedComponent {...props} {...themedProps} />;
  };

  return WithTheme;
};

export default WithTheme;
