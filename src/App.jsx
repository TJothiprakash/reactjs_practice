import "./App.css";
import Hoc from "../intermediate/component_patterns/Hoc";
import React from "react";
import DataComponent from "../intermediate/component_patterns/DataComponent";
import WithTheme from "../intermediate/component_patterns/WithTheme";
import MyComponent from "../intermediate/component_patterns/MyComponent";
import ProtectedAdminPanel from "../intermediate/component_patterns/ProtectedAdminPanel";
import MouseTracker from "../renderprops/MouseTracker";
import MouseTrackerUsingCustomHOoks from "../customhooks/MouseTrackerusingCustomHooks";
import DataFetcher from "../renderprops/DataFetcher";
import SimpleCounter from "../practice_sessions/SimpleCounter";
import Profile from "../practice_sessions/Profile";
import SimpleTodoList from "../practice_sessions/SimpleTodoList";
import GithubFetch from "../practice_sessions/GithubFetch";
import useRegistration from "../practice_sessions/april_10/custom_hooks/useRegistration";
import RegisterForm from "../practice_sessions/april_10/custom_hooks/useRegistration";
import CounterComponent from "../practice_sessions/april_10/custom_hooks/CounterComponent";
import UsageToggle from "../practice_sessions/april_10/custom_hooks/UsageToggle";
import PreviousInputTracker from "../practice_sessions/april_10/custom_hooks/PreviousInputTracker";
import FetchDataUsage from "../practice_sessions/april_10/custom_hooks/FetchDataUsage";

function App() {
  //const items = ["Apple", "Banana", "Cherry"];

  const mousetracker = MouseTrackerUsingCustomHOoks();
  function handleCLick() {
    console.log("button clicked ");
    alert("button clicked");
    return "you clicked me ";
  }

  const mockUser = {
    name: "John Doe",
    permissions: ["read", "admin"], // Try removing 'admin' to test access denial
  };
  // console.log(mockUser);

  return (
    <>
      <div>
        {/* <h1>Vite + React</h1> */}
        {/* Render your components here */}
        {/* <Hoc /> */}
        {/* <DataComponent /> */}
        {/* <MyComponent />   */}

        {/* <ProtectedAdminPanel user={mockUser} /> */}

        {/* <h1>Move the mouse around!</h1> */}
        {/* <MouseTracker
          render={(mousePosition) => (
            <p>
              Mouse position: X: {mousePosition.x}, Y: {mousePosition.y}
            </p>
          )}
        /> */}

        {/* <p>
          Mouse position: X: {mousetracker.x}, Y: {mousetracker.y}
        </p> */}
      </div>

      {/* <DataFetcher
        url="https://jsonplaceholder.typicode.com/todos/2"
        render={({ data, isLoading, error }) => {
          if (isLoading) {
            return <p>Loading...</p>;
          }

          if (error) {
            return <p>Error: {error.message}</p>;
          }

          return (
            <div>
              <h1>Data:</h1>
              <p>Title: {data.title}</p>
              <p>Completed: {data.completed ? "Yes" : "No"}</p>
            </div>
          );
        }}
      /> */}

      {/* <SimpleCounter /> */}

      {/* <Profile
        user={{
          name: "JothiPrakash",
          age: 25,
          bio: "Software Engineer with a passion for coding and technology.",
          avatarUrl: "https://via.placeholder.com/150",
        }}
      /> */}

      {/* <SimpleTodoList /> */}

      {/* <GithubFetch /> */}
      {/* <Parent /> */}

      {/* <DynamicListRendering /> */}
      {/* <InputHandling /> */}
      {/* <ButtonToggle /> */}
      {/* <GrandParent /> */}
      {/* <UserList /> */}
      {/* <CustomHookAirBNB /> */}
      {/* <FocusButton /> */}
      {/* <Timer /> */}

      {/* <DependencyArray /> */}
      {/* <ExperimentalPanel /> */}
      {/* 
      <ThemeProvider>
        <ThemeToggler />
        <MainPage />
      </ThemeProvider> */}

      {/* <ValidateForm /> */}

      {/* <CartApp /> */}
      {/* <LazyLoadDemo />   */}
      {/* <RegisterForm /> */}
      {/* <CounterComponent /> */}
      {/* <UsageToggle /> */}
      {/* <PreviousInputTracker /> */}

      <FetchDataUsage />
    </>
  );
}

export default App;
