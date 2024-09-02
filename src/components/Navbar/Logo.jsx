import React from "react";
import { Link } from "react-router-dom";
import LogoText from "../Shared/LogoText/LogoText";

const Logo = () => {
    return (
        <Link to={"/"}>
            <h1 className=" font-bold text-xl">
                <span className="text-primary">BrightView</span>
                <span className="text-primary">Telecom</span>
            </h1>
        </Link>
    );
};

export default Logo;
