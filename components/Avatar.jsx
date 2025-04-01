import React from 'react';
import '../styling/avatar.css'; // Import CSS file for styling

const Avatar = ({ imageUrl, size = { width: 50, height: 50 } }) => {
  return (
    <img 
      src={imageUrl} 
      alt="User Avatar" 
      className="avatar" 
      style={{ width: size.width, height: size.height }} 
    />
  );
};

export default Avatar;
