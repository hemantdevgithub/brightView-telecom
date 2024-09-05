import React from "react";
import { TfiAngleDown } from "react-icons/tfi";
import { NavLink } from "react-router-dom";
import { navUrls } from "../../constants/navigations";
const Navigation = () => {
  return (
    <nav className="gap-6 font-poppins hidden lg:flex relative">
      {navUrls.map((elem) => (
        <ElementNav {...elem} />
      ))}
    </nav>
  );
};

const ElementNav = ({ redirect, label, submenu }) => {
  return (
    <div className="group relative">
      <div className="hover:-translate-y-1 text-sm cursor-pointer uppercase duration-300 flex items-center gap-2">
        <NavLink
          to={redirect}
          className={({ isActive }) =>
            isActive ? "text-primary" : "text-secondary"
          }
        >
          {label}
        </NavLink>
        {submenu && (
          <TfiAngleDown className="group-hover:rotate-180 duration-300" />
        )}
      </div>
      {submenu && (
        <div className="absolute flex flex-col gap-3 bg-white -left-28 top-7 h-fit w-[300px] border rounded-xl p-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 duration-300">
          {submenu.map((menu) => (
            <Submenu key={menu.id} {...menu} />
          ))}
        </div>
      )}
    </div>
  );
};

const Submenu = ({ label, redirect }) => {
  return (
    <NavLink
      to={redirect}
      className="w-full text-secondary rounded-md text-sm px-5 py-2 duration-300 hover:bg-gray-200 hover:text-primary"
    >
      {label}
    </NavLink>
  );
};

export default Navigation;
