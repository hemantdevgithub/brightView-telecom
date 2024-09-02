import React from 'react';
import { RiRoadMapFill } from "react-icons/ri";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Container from '../Container/Container';

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

const RoadMap = () => {
  return (
    <Container>
      <div className='space-y-5 py-10'>
        <h5 className='text-center font-syne text-xl font-semibold uppercase'>
          Our Roadmap
        </h5>
        <div className='bg-gray-100 rounded-xl'>
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
                  <h1 className='text-xl font-semibold'>
                    {r.title}
                  </h1>
                  <hr />
                  <ul className='list-disc ml-5 text-sm'>
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
  );
};

export default RoadMap;