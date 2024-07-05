import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsBoxFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { PiListBulletsFill } from "react-icons/pi";
import { FaBorderAll } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isOpen }) => {
  const Menus = [
    { title: "Dashboard", icon: <BsBoxFill /> },
    { title: "Forms", icon: <MdDashboard /> },
    { title: "UI Elements", icon: <PiListBulletsFill /> },
    { title: "Charts", icon: <FaChartPie /> },
    { title: "Tables", icon: <FaBorderAll /> },
  ];
  return (
    <section>
      <div
        className={`font-roboto bg-dark-green h-screen pt-8 w-40
           ${isOpen ? "w-44" : "w-20"} duration-500 p-4 text-lg  `}
      >
        <ul className=" text-white cursor-pointer">
          <li
            className={`inline-flex ${
              isOpen && "rotate-[360deg] hover:bg-white hover:text-dark-green"
            }`}
          >
            <Avatar className="w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span
              className={`text-xs duration-300 pl-2  ${!isOpen && "scale-0"}  ${
                isOpen && ""
              }`}
            >
              Welcome
            </span>
            <span
              className={`text-xs duration-300 ${!isOpen && "scale-0"} ${
                isOpen && ""
              }`}
            >
              Ally Krex
            </span>
          </li>
          {Menus.map((menu, index) => {
            return (
              <li
                key={index}
                className="text-white inline-flex text-base items-center  p-4 hover:bg-white 
                 hover:text-dark-green"
              >
                <span className="text-lg pr-9 ">{menu.icon}</span>
                <span
                  className={`text-sm flex-1 duration-700 font-sans ${
                    !isOpen && "scale-0"
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
