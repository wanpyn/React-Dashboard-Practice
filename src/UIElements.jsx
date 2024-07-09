import React, { useReducer } from "react";
import HomePage from "./HomePage";

const UIElements = () => {
  const intialise = { backgroundColor: "#8ecae6" };
  const reducer = (state, action) => {
    switch (action) {
      case "dark-blue":
        return { backgroundColor: "#219ebc" };

      case "light-pink":
        return { backgroundColor: "#ffc8dd" };
    }
  };
  const [state, dispatcher] = useReducer(reducer, intialise);
  return (
    <div className="absolute pl-48 top-32">
      <h1>UI-ELEMENTS USING REDUCER</h1>
      <h2 style={{ backgroundColor: state.backgroundColor }}>HElllo UI</h2>
      <br></br>
      <br></br> <br></br>
      <br></br>
      <button
        className="border-4 bg-slate-600"
        onClick={() => dispatcher("dark-blue")}
      >
        TURN TO DARK BLUE
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button
        className="border-4 bg-dark-green"
        onClick={() => dispatcher("light-pink")}
      >
        TURN TO light PINK
      </button>
    </div>
  );
};

export default UIElements;
