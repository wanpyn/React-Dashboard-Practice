import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsBoxFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { PiListBulletsFill } from "react-icons/pi";
import { FaBorderAll } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen }) => {
  const Menus = [
    { title: "Dashboard", icon: <BsBoxFill />, path: "/" },
    { title: "Forms", icon: <MdDashboard />, path: "/forms" },
    { title: "UI Elements", icon: <PiListBulletsFill />, path: "/ui-elements" },
    { title: "Charts", icon: <FaChartPie />, path: "/charts" },
    { title: "Tables", icon: <FaBorderAll />, path: "/tables" },
  ];

  return (
    <section>
      <div
        className={`font-roboto bg-dark-green h-screen pt-8 ${
          isOpen ? "w-40" : "w-16"
        } duration-500 text-lg relative`}
      >
        <ul className="text-white cursor-pointer absolute">
          <li className="flex pb-3 pl-2">
            <Avatar className="w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span
                className={`text-xs duration-500 pl-2 text-sky-blue ${
                  !isOpen && "scale-0 whitespace-nowrap"
                }`}
              >
                Welcome
              </span>
              <span
                className={`text-sm pl-2 duration-500 ${
                  !isOpen && "scale-0 whitespace-nowrap"
                }`}
              >
                Ally Krex
              </span>
            </div>
          </li>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className="group inline-flex pt-3 pb-4 pl-3 text-base items-center w-full hover:bg-white"
            >
              <Link
                to={menu.path}
                className="flex items-center w-full text-white group-hover:text-dark-green"
              >
                <span className="text-xl">{menu.icon}</span>
                <span
                  className={`text-sm pl-4 duration-500 font-sans whitespace-nowrap ${
                    !isOpen && "scale-0"
                  }`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
