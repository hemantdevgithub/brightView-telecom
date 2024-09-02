import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
const Footer = () => {
    const links = [
        { id: 1, label: "About Us", redirect: "/about" },
        { id: 2, label: "Contact", redirect: "/contact" },
        { id: 3, label: "Case Studies", redirect: "/insights" },
        { id: 4, label: "Teams", redirect: "/our-team" },
        { id: 5, label: "Privacy Policy", redirect: "/privacy-policy" },
        { id: 6, label: "Terms Of Services", redirect: "/terms-of-services" },
    ];
    return (
        <div className='bg-primary py-10 flex justify-center'>
            <Container>
                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col lg:flex-row gap-7 lg:justify-between font-syne text-white'>
                        <ul className='flex flex-col lg:flex-row gap-4'>
                            {
                                links.map(l => (
                                    <Link
                                        key={l.id}
                                        to={l.redirect}
                                        className='hover:text-gray-400 duration-300'
                                    >
                                        {l.label}
                                    </Link>
                                ))
                            }
                        </ul>
                        <div className='flex flex-col gap-3'>
                            <p className='flex items-center  gap-2'>
                                <MdOutlineEmail className='text-2xl' />
                                info@heathfrogs.com
                            </p>
                            <Link to={"https://www.linkedin.com/company/healthfrogs/"} target='_blank'>
                                <p className='flex items-center  gap-2'>
                                    <AiOutlineInstagram className='text-2xl' />
                                    https://www.instagram.com/healthfrogs/
                                </p>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    {/* <p className='text-center text-sm text-white font-syne tracking-wide'>

                        © 2022 All rights Reserved. Conjunct Consulting, a Company Limited by Guarantee, with Charity Status. Registration No.: XXXXXXX
                    </p> */}
                </div>
            </Container>
        </div>
    );
};

export default Footer;