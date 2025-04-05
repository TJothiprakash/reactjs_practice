import "./App.css";
import Hoc from "../intermediate/component_patterns/Hoc";
import React from "react";
import DataComponent from "../intermediate/component_patterns/DataComponent";
import WithTheme from "../intermediate/component_patterns/WithTheme";
import MyComponent from "../intermediate/component_patterns/MyComponent";
import ProtectedAdminPanel from "../intermediate/component_patterns/ProtectedAdminPanel";
function App() {
  //const items = ["Apple", "Banana", "Cherry"];

  function handleCLick() {
    console.log("button clicked ");
    alert("button clicked");
    return "you clicked me ";
  }

  const mockUser = {
    name: "John Doe",
    permissions: ["read", "admin"], // Try removing 'admin' to test access denial
  };
  console.log(mockUser);

  return (
    <>
      <div>
        {/* <h1>Vite + React</h1> */}
        {/* Render your components here */}
        {/* <Hoc /> */}
        {/* <DataComponent /> */}
        {/* <MyComponent />   */}

        <ProtectedAdminPanel user={mockUser} />
      </div>
    </>
  );
}

export default App;
