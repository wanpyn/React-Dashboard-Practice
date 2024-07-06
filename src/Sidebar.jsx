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
        className={`font-roboto bg-dark-green h-screen pt-8 
           ${isOpen ? "w-40" : "w-16"} duration-500  text-lg relative `}
      >
        <ul className=" text-white cursor-pointer absolute">
          <li
            className={`inline-flex pb-3 pl-2
            }`}
          >
            <Avatar className="w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <span
              className={`text-xs duration-300 pl-2 text-sky-blue  ${
                !isOpen && "scale-0"
              }  ${isOpen && ""}`}
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
                className="text-white inline-flex pt-3 pb-4 pl-3 text-base items-center w-full  hover:bg-white 
                 hover:text-dark-green "
              >
                <span className="text-xl ">{menu.icon}</span>
                <span
                  className={`text-sm pl-4 duration-300 font-sans ${
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
