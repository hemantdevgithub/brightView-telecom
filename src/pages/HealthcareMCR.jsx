import React from 'react';
import { RiRoadMapFill } from "react-icons/ri";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from '../components/Container/Container';
import LogoText from '../components/Shared/LogoText/LogoText';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
const HealthcareMCR = () => {
    const roadmap = [
        {
            id: 1,
            title: "Documenting Problem Statement",
            description: [
                "Define and articulate the specific challenges and issues faced by the organization.",
                "Outline the scope and impact of identified problems."
            ],
        },
        {
            id: 2,
            title: "Documenting Stakeholder Ecosystem",
            description: [
                "Identify and map key stakeholders within the organization.",
                "Understand their roles, perspectives, and influence on the project."
            ],
        },
        {
            id: 3,
            title: "Document KPIs",
            description: [
                "Define Key Performance Indicators (KPIs) to measure success.",
                "Establish clear metrics aligned with organizational objectives."
            ],
        },
        {
            id: 4,
            title: "Develop Project Plan",
            description: [
                "Create a comprehensive project plan outlining tasks, timelines, and resources.",
                "Ensure alignment with organizational goals and objectives."
            ],
        },
        {
            id: 5,
            title: "Facilitate Stakeholder Interviews (Client Interviews)",
            description: [
                "Conduct interviews with stakeholders to gather insights and perspectives.",
                "Ensure open communication and collaboration."
            ],
        },
        {
            id: 6,
            title: "Analysis (Data Analysis)",
            description: [
                "Gather and analyze relevant data to identify trends, challenges, and opportunities.",
                "Utilize data-driven insights to inform decision-making."
            ],
        },
        {
            id: 7,
            title: "Executive Reporting",
            description: [
                "Prepare comprehensive reports for executive review.",
                "Highlight key findings and potential areas for improvement."
            ],
        },
        {
            id: 8,
            title: "Submit Recommendations (Strategy Development)",
            description: [
                "Develop strategic recommendations based on analysis and stakeholder input.",
                "Align recommendations with the overarching business strategy."
            ],
        },
        {
            id: 9,
            title: "Develop Implementation Plan",
            description: [
                "Outline a detailed plan for implementing recommended strategies.",
                "Consider resource allocation, timelines, and potential challenges."
            ],
        },
        {
            id: 10,
            title: "Measure KPIs",
            description: [
                "Implement KPI tracking mechanisms to measure project and organizational success.",
                "Continuously monitor and evaluate performance against established metrics."
            ],
        },
        {
            id: 11,
            title: "Document Knowledge Transition and Lessons Learnt",
            description: [
                "Capture and document insights gained throughout the project.",
                "Facilitate knowledge transfer for ongoing improvement."
            ],
        },
        {
            id: 12,
            title: "Closure",
            description: [
                "Ensure the successful completion of the project.",
                "Conduct a comprehensive project closure, including a final review and evaluation."
            ],
        }
    ];

    return (
        <div>
            <TopBanner
                img={'/Team/team.png'}
                heading={"Healthcare Management Consulting Roadmap"} />
            <Container>
                <div className='py-10 space-y-10'>
                    {/* <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5'>
                        {
                            organizations.map(p => (
                                <div className='h-[250px] border rounded-md relative overflow-hidden'>
                                    <img src={p.img} className='h-full absolute w-full' alt="Healthcare professional image " />
                                    <div className='absolute h-full w-full bg-gradient-to-b from-gray-800 to-slate-900 opacity-60'></div>
                                    <div
                                        className='absolute text-center flex items-center text-white text-lg z-10 justify-center h-full font-syne w-full'>
                                        <p> {p.title}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div> */}
                    <h1 className='text-center flex flex-col lg:flex-row justify-center items-center gap-3 text-2xl font-syne text-blue-800 font-semibold'>
                        <LogoText /> Management Consulting Roadmap
                    </h1>
                    <div>
                        <VerticalTimeline
                            lineColor='gray'
                        >
                            {roadmap.map(r => (
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#1b2651', color: '#fff' }}
                                    contentArrowStyle={{ borderRight: '10px solid orange' }}
                                    iconStyle={{ background: '#1b2651', color: '#fff' }}
                                    icon={<RiRoadMapFill />}
                                >
                                    <div className='space-y-3'>
                                        <h1 className='text-3xl font-semibold'>
                                            {r.title}
                                        </h1>
                                        <hr />
                                        <ul className='list-disc ml-5'>
                                            {r.description.map(d => (
                                                <li>{d}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </VerticalTimelineElement>
                            ))}
                        </VerticalTimeline>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HealthcareMCR;
