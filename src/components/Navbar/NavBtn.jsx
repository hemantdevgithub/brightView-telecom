import React from "react";
import { Link } from "react-router-dom";

const NavBtn = () => {
  return (
    <Link to={"/login"}>
      <button className="bg-primary w-[150px] text-sm uppercase text-white font-poppins px-5 py-2 rounded-md">
        Sign Up / Login
      </button>
    </Link>
  );
};

export default NavBtn;
