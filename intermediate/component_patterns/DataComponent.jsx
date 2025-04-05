import React from 'react'
import MyDataComponent from './MyDataComponent';
import withData from './WithData';
const DataComponent = () => {

    const DataComponent = withData(
      MyDataComponent,
      "https://jsonplaceholder.typicode.com/users"
    );
  return (
    <div>
      <DataComponent />
    </div>
  )
}

export default DataComponent
