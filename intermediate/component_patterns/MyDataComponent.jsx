import React from 'react';

const MyDataComponent = (props) => {
  return (
    <ul>
      {props.data.map((item) => (
        <>
          <li key={item.id}>{item.name}</li>
          <li key={item.id}>{item.email}</li>
        </>
      ))}
    </ul>
  );
};

export default MyDataComponent;
