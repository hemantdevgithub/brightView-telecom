import React, { useContext } from 'react';
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom';
import NavBtn from './NavBtn';
import ProfileBtn from './ProfileBtn';
const NavIcons = ({ isOpen, handleOpen, user }) => {
    return (
        <>
            <div
                className="lg:hidden inline-block
        "
            >
                <Hamburger
                    toggled={isOpen}
                    toggle={handleOpen}
                    color='#1370b5'
                    rounded
                    size={28}
                />
            </div>
            <div
                className='lg:inline-block hidden
      '
            >
                {
                    user ? <ProfileBtn user={user} />
                        : <NavBtn />
                }
            </div>
        </>)
};

export default NavIcons;