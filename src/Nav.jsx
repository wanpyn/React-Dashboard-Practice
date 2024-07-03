import { CgMenuLeft } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import DropDownMenu from "./DropDownMenu";
import { useState } from "react";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleMenuHandle = () => {
    setIsOpen((i) => !i);
  };
  return (
    <>
      <nav className="flex font-roboto ">
        <CgMenuLeft
          className={`bg-dark-green text-white text-4xl w-16 items-center pt-1 cursor-pointer 
          }`}
          onClick={() => ToggleMenuHandle()}
        />
        <h1 className="flex items-center flex-1 bg-sky-blue text-xs semibold pl-4  text-light-green  font-semibold">
          CODING MARKET
          <FaUserAlt className="absolute right-5 cursor-pointer" />
          <DropDownMenu />
        </h1>
      </nav>
      <section>
        <div
          className={`flex font-roboto bg-dark-green h-screen pt-5 w-40 ${
            isOpen ? "w-40" : "w-16"
          } duration-500`}
        >
          <ul className="text-white pl-9">
            <li>Welcome Alex John</li>
            <li>Dashboard</li>
            <li>Forms</li>
            <li>UI Elements</li>
            <li>Charts</li>
            <li>Tables</li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Nav;
