import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BsBoxFill } from "react-icons/bs";
import { FaChartPie } from "react-icons/fa";
import { PiListBulletsFill } from "react-icons/pi";
import { FaBorderAll } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

const Sidebar = ({ isOpen }) => {
  return (
    <section>
      <div
        className={`font-roboto bg-dark-green h-screen pt-5 w-40 ${
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
          <li className="rounded hover:shadow hover:bg-blue-500">
            <a href="">
              <BsBoxFill className="inline-block" />
              Dashboard
            </a>
          </li>
          <li>
            <MdDashboard className="inline-block" />
            Forms
          </li>
          <li>
            <PiListBulletsFill className="inline-block" />
            UI Elements
          </li>
          <li>
            <FaChartPie className="inline-block" />
            Charts
          </li>
          <li>
            <FaBorderAll className="inline-block" />
            Tables
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Sidebar;
