import React from "react";
import Nav from "./Nav";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`${isOpen ? "" : ""} `}>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Dashboard;
