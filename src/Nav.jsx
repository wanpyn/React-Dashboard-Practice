import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import DropDownMenu from "./DropDownMenu";

const Nav = ({ isOpen, setIsOpen }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenuHandle = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleDropdownHandle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className="flex font-roboto bg-dark-green relative">
      <CgMenuLeft
        className="text-white text-5xl w-16 items-center pt-2 cursor-pointer"
        onClick={toggleMenuHandle}
      />
      <h1 className="flex items-center flex-1 bg-sky-blue text-xs semibold pl-4 text-light-green font-semibold">
        CODING MARKET
        <button
          className="absolute right-5 cursor-pointer text-dark-green text-sm"
          onClick={toggleDropdownHandle}
        >
          <FaUserAlt />
        </button>
      </h1>
      {isDropdownOpen && <DropDownMenu />}
    </nav>
  );
};

export default Nav;
