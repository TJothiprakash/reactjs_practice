import React from "react";

// Higher Order Component (HOC) to wrap any component with authentication logic
const AuthenticatedComponent = (WrappedComponent) => {
  // HOC should return a new component that includes authentication logic
  return (props) => {
    const isLoggedIn = true; // You can replace this with actual login check logic

    return (
      <div>
        {/* Render the WrappedComponent and pass the `isLoggedIn` prop */}
        <WrappedComponent {...props} LoggedIn={isLoggedIn} />
      </div>
    );
  };
};

// The original component to be wrapped
const MyComponent = (props) => {
  console.log(props.LoggedIn); // Will log `true` if isLoggedIn is true

  return (
    <>
      <div>MyComponent</div>
      <div>
        {/* Conditionally render based on the LoggedIn prop */}
        {props.LoggedIn ? <p>Welcome Guest!</p> : <p>Please log in ...</p>}
      </div>
    </>
  );
};

// Wrap MyComponent with the authentication HOC
const Hoc = AuthenticatedComponent(MyComponent);

// Now `Hoc` can be used in your app, and it will show authentication logic
export default Hoc;
