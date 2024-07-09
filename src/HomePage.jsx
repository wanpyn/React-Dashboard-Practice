import React from "react";
import Forms from "./Forms";

const HomePage = () => {
  function getData(data) {
    console.log(data);
  }
  return (
    <div className=" absolute pl-48 top-32">
      <h2>Home Page CHILD TO PARENT PASSING DATA</h2>
      <p>Welcome to the home page!</p>
      <Forms getData={getData} />
    </div>
  );
};

export default HomePage;
