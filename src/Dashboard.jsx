import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} />

        {console.log("wadadadawdawd")}
      </div>
    </>
  );
};

export default Dashboard;
