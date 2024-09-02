import React from "react";
import { Link } from "react-router-dom";
import LogoText from "../Shared/LogoText/LogoText";

const Logo = () => {
    return (
        <Link to={"/"}>
            <h1 className="text-primary font-bold text-xl">
                BrightView Telecom
            </h1>
        </Link>
    );
};

export default Logo;
