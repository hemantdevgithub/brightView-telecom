import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import ParaText from '../components/Shared/ParaText';
import SubHeading from '../components/Shared/SubHeading';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
const About = () => {
    const professionals = [
        {
            id: 1,
            title: "Healthcare Providers",
            img: "/About/HealthcareProviders.png"
        },
        {
            id: 1,
            title: "Healthcare Payors",
            img: "About/HealthcarePayors.png"
        },
        {
            id: 1,
            title: "Healthcare Pharmacy",
            img: "/About/HealthcarePharmacy.png"
        },
        {
            id: 1,
            title: "Healthcare Medical Devices",
            img: "/About/Healthcare Medical Devices.png"
        },
        {
            id: 1,
            title: "Healthcare Asset management",
            img: "/About/Healthcare Asset Management.png"
        },
        {
            id: 1,
            title: "Healthcare Clinical Labs",
            img: "/About/Healthcare clinical labs.png"
        },
        {
            id: 1,
            title: "Healthcare Life Sciences",
            img: "/About/Healthcare life science.png"
        },
        {
            id: 1,
            title: "Healthcare Policy and Governance",
            img: "/About/government.png"
        },
        {
            id: 1,
            title: "Management Consulting",
            img: "/About/Healthcare Management Consulting.png"
        },
        {
            id: 1,
            title: "Healthcare Technology and Digital Transformation",
            img: "/About/healthcare technology.png"
        },
    ]
    return (
        <div>
            <TopBanner
                heading={"About Us"}
                img="About\About.png"
            />
            <Container>
                <div className='py-10 lg:w-[80%] font-syne mx-auto space-y-10'>
                    <h1 className='text-3xl text-primary font-semibold tracking-wider font-syne text-center flex gap-3 justify-center'>
                        About
                        <span className='text-[#1b2651] font-semibold'>
                            Health
                            <span className='text-[#cd2028] font-semibold'>
                                FROGS
                            </span>
                        </span>
                    </h1>
                    <ParaText>
                        HealthFROGS finds the right solution partner for the healthcare customers and right customers for the healthcare solution partners.
                        Solutions partners are system integrations, Implementation partners, and domain and technology consulting partners for the Healthcare business problems.

                    </ParaText>
                    {/* <SubHeading text={"Our Services :"} />
                    <ul className='list-disc pl-7 space-y-3 text-secondary'>
                        <li>
                            Operational Excellence: We analyze and optimize hospital workflows, identifying areas for improvement to enhance overall operational efficiency. From resource allocation to process improvement, we work collaboratively with hospital staff to implement sustainable solutions.
                        </li>
                        <li>
                            Financial Management: HealthFROGS provides comprehensive financial management services, including budget analysis, revenue cycle management, and cost containment strategies. Our goal is to help hospitals achieve financial stability while maintaining the highest standards of patient care.
                        </li>
                        <li>
                            Quality Assurance: Ensuring the delivery of high-quality healthcare is paramount. Our consulting teams conduct thorough assessments of clinical practices, regulatory compliance, and patient outcomes to implement best practices and drive continuous improvement.
                        </li>
                        <li>
                            Technology Integration: We guide hospitals in adopting cutting-edge technologies to streamline healthcare delivery. From electronic health records (EHR) implementation to telemedicine solutions, we help our clients leverage technology for better patient outcomes.
                        </li>
                        <li>
                            Strategic Planning: HealthFROGS collaborates with hospital leadership to develop robust strategic plans. We consider market trends, community needs, and organizational strengths to create roadmaps that position our clients for long-term success.
                        </li>
                        <li>
                            Training and Development: Our firm offers customized training programs for hospital staff, empowering them with the skills and knowledge needed to adapt to industry changes and deliver exceptional patient care.
                        </li>
                        <li>
                            Regulatory Compliance: Staying abreast of ever-evolving healthcare regulations is challenging. HealthFROGS provides expertise in regulatory compliance, ensuring that hospitals adhere to all applicable laws and standards.
                        </li>
                    </ul>
                    <ParaText>
                        By choosing HealthFROGS as your healthcare management consulting partner, you gain access to a wealth of experience and innovative solutions. We are committed to driving positive change in healthcare organizations, ultimately improving patient outcomes and fostering sustainable growth. Contact us today to explore how we can tailor our services to address the unique needs of your hospital."
                    </ParaText> */}
                    <div className='space-y-5'>
                        <SubHeading text={"Healthcare customers we serve are :"} />
                        <h4 className='text-xl'>
                            We serve Professionals and Institutions from the below Healthcare segments
                        </h4>
                        {/* <div className='space-y-4'>
                            <h4 className='text-xl'>HealthCare Professionals</h4>
                            <div className='flex flex-col lg:flex-row justify-center items-center gap-5'>
                                {
                                    professionals.map(p => (
                                        <div className='h-[200px] border rounded-md relative w-[300px] overflow-hidden'>
                                            <img src={p.img} className='h-full absolute w-full' alt="Healthcare professional image " />
                                            <div className='absolute h-full w-full bg-gradient-to-b from-gray-800 to-slate-900 opacity-60'></div>
                                            <div
                                                className='absolute flex items-center text-white text-lg z-10 justify-center h-full font-syne w-full'>
                                                <p> Healthcare { p.title}</p>
                                            </div>
                                        </div>
                                    ))
                                    }
                            </div>
                        </div>
                        <div className='space-y-4'>
                            <h4 className='text-xl'>HealthCare Organizations</h4>
                            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-5'>
                                {
                                    organizations.map(p => (
                                        <div className='h-[200px] border rounded-md relative w-[300px] lg:w-[250px] overflow-hidden'>
                                            <img src={p.img} className='h-full absolute w-full' alt="Healthcare professional image " />
                                            <div className='absolute h-full w-full bg-gradient-to-b from-gray-800 to-slate-900 opacity-60'></div>
                                            <div
                                                className='absolute flex items-center text-white text-lg z-10 justify-center h-full font-syne w-full'>
                                                <p> {p.title}</p>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div> */}
                        <div className='space-y-4'>
                            <div className='flex flex-col lg:flex-row lg:flex-wrap justify-center items-center gap-2'>
                                {
                                    professionals.map((p, index) => (
                                        <Link to={`/customers/${p.title.toLowerCase().replace(" ", "-")}`}>
                                            <div key={index} className='h-[200px] border rounded-md relative w-[300px] lg:w-[250px] overflow-hidden'>
                                                <img src={p.img} className='h-full object-center object-cover absolute w-full' alt="Healthcare professional image " />
                                                <div className='absolute h-full w-full bg-gradient-to-b from-gray-800 to-slate-900 opacity-60'></div>
                                                <div
                                                    className='absolute flex items-end text-white z-10 justify-center text-center h-full font-syne w-full p-3'>
                                                    <p> {p.title}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};





export default About;
