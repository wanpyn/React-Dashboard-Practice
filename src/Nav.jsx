"use client";
import { CgMenuLeft } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

const Nav = ({ isOpen, setIsOpen }) => {
  const ToggleMenuHandle = () => {
    setIsOpen((i) => !i);
  };
  return (
    <>
      <nav className="flex font-roboto ">
        <CgMenuLeft
          className="bg-dark-green text-white text-4xl w-14 items-center pt-1 cursor-pointer"
          onClick={() => ToggleMenuHandle(isOpen)}
        />
        <h1 className="flex items-center flex-1 bg-sky-blue text-xs semibold pl-4  text-light-green  font-semibold">
          CODING MARKET
          <button className="absolute right-5 cursor-pointer text-dark-green text-sm">
            <FaUserAlt />
          </button>
          <DropDownMenu />
        </h1>
      </nav>
      {/* 
      <section>
        <div
          className={`flex font-roboto bg-dark-green h-screen pt-5 w-40 ${
            isOpen ? "w-40" : "w-14"
          } duration-500 p-4 text-lg `}
        >
          <ul className=" text-white cursor-pointer">
            <li className="flex">
              <Avatar className="w-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <span className="text-xs "> Welcome</span> <span>Ally Krex</span>
            </li>
            <li>
              <BsBoxFill />
              Dashboard
            </li>
            <li>
              <MdDashboard />
              Forms
            </li>
            <li>
              <PiListBulletsFill />
              UI Elements
            </li>
            <li>
              <FaChartPie />
              Charts
            </li>
            <li>
              <FaBorderAll />
              Tables
            </li>
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default Nav;
