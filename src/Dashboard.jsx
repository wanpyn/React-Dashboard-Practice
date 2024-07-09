import React from "react";
import Nav from "./Nav";
import Sidebar from "./Sidebar";
import Forms from "./Forms";

const Dashboard = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <div className="">
        <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
        <Sidebar isOpen={isOpen} /> {/* Render Sidebar outside of Routes */}
      </div>
    </>
  );
};

export default Dashboard;
