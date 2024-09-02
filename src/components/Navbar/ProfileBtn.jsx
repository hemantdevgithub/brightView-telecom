import React from 'react';
import toast from 'react-hot-toast';
import { FaCircle } from 'react-icons/fa';
import { HiOutlineUserCircle } from "react-icons/hi2";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../../Api/authApi';
import { logout } from '../../redux/features/authSlice';
const ProfileBtn = ({ user }) => {
    const dispatch = useDispatch()
    const userLogOut = async () => {
        try {
            const response = await logoutUser();
            if (response.success === true || response.statusCode === 200) {
                dispatch(logout())
                toast.success("User logged out successfully")
            }
        } catch (error) {
        }
    }
    return (
        <div className='relative cursor-pointer group'>
            <div className='border-2  flex items-center py-2 px-3 rounded-md  gap-4'>
                <HiOutlineUserCircle className='text-[30px] text-softBlue' alt="" />
                <RxHamburgerMenu className='text-xl text-softBlue' alt="" />
            </div>
            <div
                className='absolute top-12 -left-5 invisible opacity-0 duration-300 group-hover:visible group-hover:opacity-100 h-fit p-3 w-[150px] bg-white border rounded-lg flex flex-col gap-3'>
                <Link to={'/user-profile'}>
                    <button className='w-full border py-2 text-sm hover:bg-gray-100 hover:text-softBlue duration-300 font-syne rounded-md'>
                        Profile
                    </button>
                </Link>
                <button
                    onClick={() => userLogOut()}
                    className='w-full border py-2 text-sm hover:bg-gray-100 hover:text-softBlue duration-300 font-syne rounded-md'>
                    Sign Out
                </button>
            </div>
            {
                user?.profileCompleted ||
                <FaCircle className='text-red-500 text-xs absolute -top-0 -right-1' />
            }
        </div>
    );
};

export default ProfileBtn;