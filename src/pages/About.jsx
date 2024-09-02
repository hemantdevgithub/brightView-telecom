import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';

const About = () => {
    return (
        <div>
            <TopBanner pageName={"About"} img={"https://supportbrightviewtelecom.netlify.app/about.jpg"} heading={"About Us"} />
            <Container>
                <div className='py-10 font-poppins space-y-5'>
                    <h4 className='text-center text-xl font-semibold uppercase w-fit mx-auto pb-1 border-b-4 border-primary px-4'>who we are?</h4>
                    <div className='w-[60%] mx-auto space-y-5'>
                        <h1 className='text-4xl font-semibold tracking-wide'>
                            Brightview telecom is an ISO 9001 and ISO 14001 and ISO 45001 certified company.

                        </h1>
                        <p className='text-gray-500 space-y-2 *:block'>
                            <span>Brightview Telecom Pvt. Ltd is a leading telecom company having more than 15 years of expertise in the field of telecom equipment installation, commissioning and other telecom activities Like Trunkey projects</span>

                            <span>Having more than 250 field teams spanning around 10 telecom circles pan India and Nepal. Brightview provides all kind of telecom services like RF suvery and Site acquisition ,RF Drive Test, RF optimization, EMI and EMF testing, installation of Microwave, BTS, BSC, IBS, MSAN, Electrical ,Earth Pit ,Civil work with tower foundation, Shelter, Tower, DWDM , Transmission equipment, Access Equipment etc. Brightview is a Gold partner of Huwaei and Excellent Partner of ZTE .</span>

                            <span>Brightview telecom also provides various IT Solutions including Hardware and Software. Having partnered with leading technology companies like ACCOPS, AWS, BEL Technologies etc. Brightview provides solutions in the field of Cloud computing, Digital Virtualization, App development etc.</span>
                        </p>
                    </div>
                </div>
            </Container>
            <div className='bg-[#f9f9f9] py-10'>
                <Container>
                    <div className='py-10 font-poppins space-y-5'>
                        <h4 className='text-center text-xl font-semibold uppercase w-fit mx-auto pb-1 border-b-4 border-primary px-4'>WHAT WE DO ?</h4>
                        <div className='w-[60%] mx-auto space-y-5'>
                            <h1 className='text-4xl font-semibold tracking-wide'>
                                Get the Best Service Training with Our Company
                            </h1>
                            <p className='text-gray-500 space-y-2 '>
                                BrightViewTelecom specializes in providing top-tier service training to ensure your team is equipped with the skills needed for optimal communication and connectivity. Our training programs are designed to enhance your business operations and drive success.
                            </p>
                        </div>
                        <div className='grid grid-cols-4 gap-8'>
                            {
                                Array.from({ length: 4 }).map(x => (
                                    <div className='h-[400px] rounded-xl border relative overflow-hidden group cursor-pointer'>
                                        <img src="https://supportbrightviewtelecom.netlify.app/img/training-1.jpg" alt="" className='rounded-xl group-hover:scale-110 duration-300 h-full w-full object-cover object-center' />
                                        <div className='absolute h-full w-full bg-gradient-to-b from-black to-slate-900 top-0 opacity-60 ' />
                                        <div className='absolute bottom-0 group-hover:hidden'>
                                            <h3 className='text-2xl p-5 text-white font-bold'>End to end service provider for telecom and IT Solutions</h3>
                                        </div>
                                        <div className='bg-pink-800 duration-300 h-0 absolute bottom-0 group-hover:h-1/2 w-full flex flex-col gap-3 group-hover:p-6  text-white'>
                                            <h4 className='text-xl font-semibold'>IELTS Coaching</h4>
                                            <p className='text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, tenetur.</p>
                                            <button className='flex items-center w-fit'>
                                                <span>Read More</span>
                                                <FaArrowRight />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default About;