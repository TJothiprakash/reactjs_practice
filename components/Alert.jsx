import '../styling/alert.css'
import React from 'react';
//import './Alert.css'; // Import CSS for styling

const Alert = ({ message, type }) => {
  // Define a class based on the alert type
  const alertClass = `alert alert-${type}`;

  return <div className={alertClass}>{message}</div>;
};

export default Alert;
