import { useState } from "react";
import reactLogo from "/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserInfo from "../components/UserInfo";
import ItemList from "../components/ItemList";
import ConditionalComponent from "../components/ConditionalComponent";
import ProductCard from "../components/ProductCard";
import Alert from "../components/Alert";
import Avatar from "../components/Avatar";
import MyComponent from "../components/MyComponent";
import UserProfile from "../classcomponents/UserProfile";
import Greeting from "../classcomponents/Greeting";
import Item from "../classcomponents/Item";
import FunctionalComponent from "/stateManagement/functionalComponent.jsx";
import UserDetails from "/stateManagement/UserDetails";
import ButtonComponent from "../components/ButtonComponent";
import MyForm from "/stateManagement/MyForm.jsx";
import ColorChanger from "/stateManagement/ColorChanger";
import ToggleVisibility from "/stateManagement/ToggleVisibility";
import ShoppingCart from "/stateManagement/ShoppingCart";
import Counter from "../stateManagement/classcomponent/Counter";
import Example from "/stateManagement/classcomponent/Example";
import InputExample from "./stateManagement/classcomponent/InputExample.jsx";



function App() {
  const myFunction1 = () => {
    return <h1>Hello from myFunction it is an arrow function</h1>;
  };

  function MyFunction(props) {
    return (
      <h2>
        It is a simpel function age is {props.age}
        Married : {props.isMarried ? "Yes" : "no"}
      </h2>
    );
  }

  const items = ["Apple", "Banana", "Cherry"];

  function handleCLick() {
    console.log("button clicked ");
    alert("button clikced");
    return "you clicked me ";
  }

  return (
    <>
      {/*<ConditionalComponent show={true}/>
    <UserInfo name="Bob Johnson" age={30} email="bob.johnson@example.com" />;
    <ItemList items={items}/>
 
 
 
    <ButtonComponent text= "clickMe" onClick={handleCLick}/>
    <ProductCard name="Product" description="text blablachahcbla " price="$8"/>*
     <Alert message="Operation Successful!" type="success" />
      <Alert message="Something went wrong!" type="error" />
      <Alert message="Warning! Check your input." type="warning" />
      <Avatar imageUrl="https://picsum.photos/200"  size={{ width: 100, height: 100 }} />
      <Avatar imageUrl="https://picsum.photos/201" size={{ width: 75, height: 50 }} />
      <Avatar imageUrl="https://picsum.photos/202" /> 
      <MyComponent />
      <div>
      <UserProfile data={{name:"jothiprakash" , age:"24", email: "jothipraksh888@gmail.com"}} />
       <UserProfile data={{name:"jothiprakash" , email: "jothipraksh888@gmail.com"}} />

  </div>
  

  <Greeting  name="JothiPrakash "/>
  <Greeting />


    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <Item 
        name={35} 
        price={499} 
        description="A high-quality smartphone with great features." 
      />
      <Item 
        name="Laptop" 
        price={899} 
        description="A powerful laptop for work and gaming." 
      />
    </div>



    <FunctionalComponent />

<UserDetails />  

<MyForm />
<ColorChanger />
<ToggleVisibility />*/}
      <ShoppingCart /> 

      <Example />
     <Counter />

      <InputExample />
    </>
  );
}

export default App;
