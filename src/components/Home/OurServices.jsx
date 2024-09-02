import React from 'react';
import { Link } from 'react-router-dom';
import { healthcareServices } from '../../constants/services';
import Container from '../Container/Container';

const OurServices = () => {


    return (
        <div className='bg-gray-200 py-20'>
            <Container>
                <h5 className='text-center font-syne text-xl font-semibold uppercase'>
                    Our Services
                </h5>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                    {
                        healthcareServices.map(service => (
                            <Link
                                to={`/services/${service.redirect}`}
                                state={{ id: service.id, redirect: service.redirect }}
                                className='bg-white flex flex-col justify-evenly gap-4 text-center border border-blue-500 rounded-xl px-5 py-5 hover:bg-gray-200 duration-300'>
                                <h4 className='text-center first-letter:font-bold first-letter:text-2xl first-letter:text-[#cd2028] w-full  text-black font-syne text-xl'>
                                    <span>{service.fullForm}</span>
                                </h4>
                                <p className='text-md font-syne'>
                                    {service.description}
                                </p>
                            </Link>
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default OurServices;