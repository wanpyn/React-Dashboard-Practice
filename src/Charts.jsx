import React, { useEffect, useRef } from "react";
import HomePage from "./HomePage";

const Charts = () => {
  const ref = useRef();
  useEffect(() => {
    console.log(ref.current.offsetHeight);
  });
  return (
    <div className="absolute pl-48 top-32">
      <h1>CHARTS using UseRef</h1>
      <br></br>
      <br></br>
      <h1 ref={ref}>HELLO CHECK CONSOLE FOR CORDINATES </h1>
    </div>
  );
};

export default Charts;
