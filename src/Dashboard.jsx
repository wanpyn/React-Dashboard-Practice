import React from "react";
import Nav from "./Nav";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`${isOpen ? "" : ""} w-full`}>
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </>
  );
};

export default Dashboard;
