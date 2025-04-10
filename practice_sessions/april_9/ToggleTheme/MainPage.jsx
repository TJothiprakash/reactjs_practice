import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MainPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`main-page ${theme}`}>
      <h1>🎬 Welcome to Netflix Clone</h1>
      <p>
        Enjoy streaming in {theme === "light" ? "🌞 Light" : "🌚 Dark"} mode
      </p>
    </div>
  );
};

export default MainPage;
