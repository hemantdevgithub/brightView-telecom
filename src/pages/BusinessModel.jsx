import React, { useState } from 'react';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
const BusinessModel = () => {
    const [modelCategory, setModelCategory] = useState("customer")
    const steps = [
        {
            id: 1,
            category: "solution-partners",
            heading: "Onboarding",
            points: [
                "Understand company size, revenue, establishment, current customer locations, portfolio size",
                "Understand Capabilities, competencies, USPs",
                "Understand Cxo Goals & Milestones",
                "Build effective and unique Collateral including Case Studies, USPs, capture Testimonials",
                "Build ICP (Ideal customer profile)",
                "Develop customer/buyer personas",
                "Defining hypothesis/criteria/Pitches",
                "Agree to Set-go",
            ]
        },
        {
            id: 1,
            category: "solution-partners",
            heading: "Set-Go",
            points: [
                "Establish required Marketing and Sales hubs ",
                "Develop digital marketing presence",
                "Build and Sign off on Lead-Gen lists",
                "Report daily/weekly SDR effrots & lead pipeline",
                "Schedule Capability demo/proposal review meetiings with Leads/Customers",
                "Reimagine and redesgn business develoment goals aligning to key leadership preferences",
            ]
        },
        {
            id: 1,
            category: "solution-partners",
            heading: "Connect Customer",
            points: [
                "Write contracts with SLAs, Penalties, KPIs",
                "Renewing contracts",
                "Establish Change Management",
                "Timely invoice submissions to customers",
                "Ensure timely payments to Solution partners",
                "Cross-sell and upsell Solution partner services and products within the same customer",
                "Streamline weekly Pursuit Monitor",
                "Establishing Account growth navigator"
            ]
        },
        {
            id: 1,
            category: "customer",
            heading: "Onboarding",
            points: [
                "Understand & Document Healthcare Business or Technology Problem & Requirements",
                "Document Capabilities, competencies needed",
                "Document Timelines, Budgets, resourcing needs",
                "Develop RAID document",
                "Develop RACI Matrix",
                "Develop Project Plan",
                "Define Phase Gate Reviews",
                "Agree to Set-go"
            ]
        },
        {
            id: 1,
            category: "customer",
            heading: "Set-Go",
            points: [
                "Search for Healthcare solution partners (Professional or Institutional)",
                "Request RFIs/Request RFPs",
                "Validate Solution partner case studies, testimonials, USPs, company",
                "Report daily/weekly Partners search efforts & build SP pipeline",
                "Schedule Capability demo/proposal review meetings with solution partners",
                "Reimagine and redesign search goals aligning to key leadership preferences"
            ]
        },
        {
            id: 1,
            category: "customer",
            heading: "Connect Solution Partner",
            points: [
                "Write contracts with SLAs, Penalties, KPIs",
                "Renewing contracts",
                "Establish Change Management",
                "Timely invoice submissions",
                "Ensure timely payments to Solution partners",
                "Introduce Solution partner's services and products",
                "Streamline Project tracking",
                "Ensure 100% KPIs are met"
            ]
        },
    ]
    return (
        <div>
            <TopBanner
                heading={"Business Model"}
                img="/About/Business Model.png"
            />
            <Container>
                <div className='py-10 font-syne space-y-10'>
                    <div className='space-y-4'>
                        <p className='text-primary font-mono text-sm font-semibold uppercase text-center'>HealthFROGS Business Model For :</p>
                        <div className='flex justify-center gap-5'>
                            <button
                                onClick={() => setModelCategory("customer")}
                                className={`${modelCategory === "customer" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} border-2 duration-300 w-[250px] rounded-lg py-2`}
                            >
                                Customers
                            </button>
                            <button
                                onClick={() => setModelCategory("solution-partners")}
                                className={`${modelCategory === "solution-partners" ? "bg-blue-500 text-white" : "bg-white text-blue-500"} border-2 duration-300 w-[250px] rounded-lg py-2`}>
                                Solutions Partner
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            steps.filter(s => s.category === modelCategory).map((step, index) => (
                                <div className={`py-10 px-5 border rounded-md shadow-md shadow-blue-400  flex flex-col items-center gap-5 hover:scale-105 duration-300 cursor-pointer`}>
                                    <h3 className='text-xl font-syne font-bold text-primary text-center uppercase'>
                                        {step.heading}
                                    </h3>
                                    <ul className='space-y-3 text-sm list-disc px-5'>
                                        {step.points.map(p => (
                                            <li>{p}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};



export default BusinessModel;