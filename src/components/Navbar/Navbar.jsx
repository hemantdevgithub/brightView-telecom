import React, { useCallback, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../Container/Container";
import Logo from "./Logo";
import MiniMenu from "./MiniMenu";
import Navigation from "./Navigation";
import NavIcons from "./NavIcons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { user } = useSelector((state) => state.auth);
  const handleClick = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  return (
    <header className=" top-0 z-[999] w-full relative bg-white border shadow-sm py-3">
      <Container>
        <div className="bg-[#f3f3f3] flex items-center justify-between px-5 lg:px-10 rounded-full w-full py-4">
          <Logo />
          <Navigation />
          <NavIcons user={user} handleOpen={handleClick} isOpen={isOpen} />
        </div>
      </Container>
      <MiniMenu auth={user} setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
};

export default Navbar;
