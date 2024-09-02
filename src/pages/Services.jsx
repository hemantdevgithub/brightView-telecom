import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import { healthcareServices } from '../constants/services';

const Services = () => {
    const { redirect } = useParams();
    const location = useLocation();
    const filteredServices = healthcareServices.find(s => (s.redirect === redirect) || (s.id === location.state.id))
    return (
        <div>
            <TopBanner heading={"Services"} img={"/Team/team.png"} />
            <Container>
                <div className='py-10 bg-[#fff] space-y-10'>
                    <h1 className='text-center font-syne text-xl lg:text-3xl font-semibold text-primary first-letter:text-4xl'>{filteredServices.fullForm} Services
                    </h1>
                    <div className='flex flex-col lg:flex-row items-start justify-center gap-5'>
                        <div className='w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-5'>
                            {
                                filteredServices.services.map(s => (
                                    <Link
                                        state={{ serviceId: filteredServices.id, subServiceId: s.id }}
                                        to={`/services/${redirect}/${s.redirect}`}
                                        key={s.id}>
                                        <div className='bg-white p-8 flex flex-col gap-5 text-center border border-blue-500 rounded-xl items-center justify-center'>
                                            <h4 className='text-center font-syne text-xl'>
                                                {s.service}
                                            </h4>
                                            <p className='text-sm font-syne'>
                                                {s.description}
                                            </p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        {/* <div className='w-full lg:w-[30%] space-y-5'>
                            <h3 className='text-2xl font-syne'>Case Studies</h3>
                            <div className='flex flex-col gap-5'>
                                {
                                    caseStudies.filter(s => s.category === filteredServices.category).map(caseStudy => (
                                        <Link
                                            to={`/insights-details/${caseStudy.id}`}
                                            state={{ id: caseStudy.id }}
                                        >
                                            <div className='font-syne space-y-3 group border-primary border rounded-md'>
                                                <div className='overflow-hidden'>
                                                    <img src={caseStudy.thumbnail} className='h-[230px] group-hover:scale-105 duration-300 object-cover' alt="case study images" />
                                                </div>
                                                <div className='px-5 space-y-3'>
                                                    <p className='uppercase font-syne font-semibold text-orange-400 tracking-wider'>{caseStudy.category}</p>
                                                    <h4 className='text-lg text-gray-600 font-semibold group-hover:text-primary duration-300'>
                                                        {caseStudy.title}
                                                    </h4>
                                                    <p className='text-sm text-gray-600'>{caseStudy.date}</p>
                                                </div>
                                                <hr className='border' />
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div> */}
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Services;