import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { useCallback, useEffect, useState } from 'react'
import { navUrls } from '../../constants/navigations';
import NavIcons from './NavIcons';
import NavBtn from './NavBtn';
import ProfileBtn from './ProfileBtn';


//Main section starts from there
const MiniMenu = ({
    isOpen, setIsOpen, auth
}) => {
    return (
        <div
            className={`
            flex-col
            gap
            
            fixed
            transition-all
            duration-700
            bg-white
            lg:hidden
            w-full
            h-fit
            ${isOpen ? 'flex ' : 'hidden'}
        `}>
            <div
                className="
                    px-4
                    py-8
                    flex flex-col gap-2
                "
            >

                {navUrls?.map((elem) => {
                    return <Navigators
                        {...elem}
                        key={elem?.id}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    />
                })}

            </div>
            <div className='lg:hidden flex justify-center mb-3'>
                {
                    auth ? <ProfileBtn />
                        : <NavBtn />
                }
            </div>
        </div>
    )
};


// Second component for Navigator
const Navigators = ({ label, submenu, redirect, setIsOpen, isOpen }) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(true);
    const { pathname } = useLocation()
    const navigate = useNavigate()
    const handleClick = (submenu, redirect) => {
        if (!submenu) {
            navigate(redirect);
        };
        setIsSubMenuOpen(!isSubMenuOpen)
    }
    useEffect(() => {
        setIsOpen(false)
        setIsSubMenuOpen(false)
    }, [pathname])
    return (
        <div className='border rounded-lg border-blue-500'>
            <div className='relative' onClick={() => handleClick(submenu, redirect)}>
                <NavLink
                    className={`flex justify-between items-center p-4
                     ${(pathname === redirect && !isSubMenuOpen) && "bg-gray-100"}`}
                // to={!submenu && redirect}
                >
                    {label}
                    {
                        submenu && <AiOutlinePlus
                            onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
                            className={`h-7 w-7 p-1 text-blue-500 border border-blue-300 rounded-full transition-all duration-700 ${isSubMenuOpen ? "rotate-[225deg]" : "rotate-0"}`}
                        />
                    }
                </NavLink>
            </div>
            {
                (isSubMenuOpen && submenu) && (
                    <div className={`flex flex-col gap-2 px-4 pb-4 ${isSubMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"} duration-500 transition-all`}>
                        {
                            submenu.map(menu => (
                                <div className='flex flex-col gap-4 border rounded-md'>
                                    <NavLink
                                        className={({ isActive }) => isActive ? "text-primary bg-gray-100 text-sm p-3" : "text-primary text-sm p-3"}
                                        to={menu.redirect}
                                    >
                                        {menu.label}
                                    </NavLink>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
};


// Third component for Navigator
const SubmenuNavigator = ({ id, label, redirect }) => {
    return (
        <div
            className="
            flex
            flex-col
            gap-4
        "
        >
            <NavLink
                className={`
                text-white
                text-sm
                p-4
                hover:bg-blue-500
            `}
                to={redirect}
            >
                {label}
            </NavLink>

        </div>
    )
}

export default MiniMenu;