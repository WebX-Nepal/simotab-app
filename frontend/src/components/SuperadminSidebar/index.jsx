import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import {
  MdCategory,
  MdOutlineDashboard,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { FaQuestion } from "react-icons/fa";
import { GiNothingToSay } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiUserVoice } from "react-icons/bi";
import { BsFillBagDashFill } from "react-icons/bs";
import AddFaqSection from "../../pages/SuperAdmin/AddfaqSection";

const SuperAdminSidebar = () => {
  const menus = [
    { name: "Dashboard", link: "/", icon: MdOutlineDashboard },
    { name: "Orders", link: "/", icon: BsFillBagDashFill },
    { name: "Product", link: "/", icon: MdProductionQuantityLimits },
    { name: "user", link: "/", icon: AiOutlineUser },
    { name: "Faqs", link: "/", icon: FaQuestion },
    { name: "Testinomials", link: "/", icon: GiNothingToSay },
    { name: "User Responses", link: "/", icon: BiUserVoice },
    { name: "Category", link: "/", icon: MdCategory },
    { name: "Setting", link: "/", icon: RiSettings4Line },
    { name: "Logout", link: "/", icon: BsFillBagDashFill },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6 bg-white">
      <div
        className={`bg-[#0e0e0e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-gray-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibol">
        <AddFaqSection />
      </div>
    </section>
  );
};

export default SuperAdminSidebar;
