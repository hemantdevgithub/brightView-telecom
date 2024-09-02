import React from "react";
import { Link } from "react-router-dom";
import LogoText from "../Shared/LogoText/LogoText";

const Logo = () => {
  return (
    <Link to={"/"}>
      <h1 className=" font-bold text-xl space-x-2">
        <span className="text-primary">Brightview</span>
        <span className="text-secondary">Telecom</span>
      </h1>
    </Link>
  );
};

export default Logo;
