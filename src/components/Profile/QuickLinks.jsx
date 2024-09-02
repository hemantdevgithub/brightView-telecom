import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const QuickLinks = ({ profile }) => {
    return (
        <div className='space-y-2'>
            <h1 className='text-blue-600 text-base font-syne'>Quick Links</h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 h-full mx-auto'>
                {
                    profile?.website && (
                        <Link
                            to={profile?.website}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <CgWebsite className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>Website</h3>
                            </div>
                        </Link>
                    )
                }
                {
                    profile?.linkedin && (
                        <Link
                            to={profile?.linkedin}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <FaLinkedin className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>Linkedin</h3>
                            </div>
                        </Link>
                    )
                }
                {
                    profile?.facebook && (
                        <Link
                            to={profile?.facebook}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <FaFacebook className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>Facebook</h3>
                            </div>
                        </Link>

                    )
                }
                {
                    profile?.twitter && (
                        <Link
                            to={profile?.twitter}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <FaTwitter className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>twitter</h3>
                            </div>
                        </Link>
                    )
                }
                {
                    profile?.instagram && (
                        <Link
                            to={profile?.instagram}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <FaInstagram className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>Instagram</h3>
                            </div>
                        </Link>
                    )
                }
                {
                    profile?.youtube && (
                        <Link
                            to={profile?.youtube}
                            target='_blank'
                        >
                            <div className='flex items-center gap-5 border border-softBlue rounded-md px-3 py-1 hover:bg-gray-200 duration-300 text-sm'>
                                <FaYoutube className='text-lg text-secondary' />
                                <h3 className='text-softBlue'>Youtube</h3>
                            </div>
                        </Link>
                    )
                }


            </div>
        </div>
    );
};
// const QuickLinks = ({sidebarItems}) => {
//     return (
//         <div className='space-y-4'>
//             <h1 className='text-blue-600 text-xl font-syne'>Quick Links</h1>
//             <div className='flex flex-col gap-3 h-full'>
//                 {
//                     sidebarItems.map(item => (
//                         <div className='text-softBlue hover:bg-gray-200  duration-300 cursor-pointer text-sm border rounded-md py-2 px-3 flex items-center gap-5 h-full'>
//                             <FaUserAlt className='text-gray-500' />
//                             <p>{item.label}</p>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     );
// };

export default QuickLinks;