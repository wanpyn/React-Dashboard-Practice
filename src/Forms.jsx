import React, { useState, useEffect } from "react";

import HomePage from "./HomePage";

const Forms = (props) => {
  const [count, setCount] = useState(8);
  const increment = () => {
    setCount((c) => c + 1);
  };
  function handledata(e) {
    e.preventDefault();
    props.getData(count);
  }
  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className=" absolute pl-48 top-32">
      <h1>FORMS USESTATE</h1>
      <button
        className="bg-dark-green text-white p-1 ml-5"
        onClick={increment}
        onChange={handledata}
      >
        COUNT ON
      </button>
      <h1 className="p-5">{count}</h1>
    </div>
  );
};

export default Forms;
