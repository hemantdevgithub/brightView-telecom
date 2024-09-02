import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import { caseStudies } from '../constants/caste-study';

const CaseStudies = () => {
    return (
        <div>
            <TopBanner
                heading={"HealthCare Insights"}
                img="About\Insights.png" />
            <Container>
                <div className='py-10 space-y-10'>
                    <h2 className='text-3xl text-secondary font-syne'>
                        HealthCare Insights :
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-10'>
                        {
                            caseStudies.sort((a, b) => a.category > b.category).map(caseStudy => (
                                <Link
                                    key={caseStudy.id}
                                    to={`/insights/${caseStudy.category.toLowerCase()}`}
                                    state={{ id: caseStudy.id }}
                                    className='font-syne space-y-3 group w-full'>
                                    <div className='overflow-hidden w-full'>
                                        <img src={caseStudy.thumbnail} className='h-[230px] group-hover:scale-105 w-full duration-300 object-cover' alt="case study images" />
                                    </div>
                                    <p className='uppercase font-syne font-semibold text-orange-400 text-sm'>{caseStudy.name}</p>
                                    <h4 className='text-lg text-gray-600 font-semibold group-hover:text-primary duration-300'>
                                        {caseStudy.title}
                                    </h4>
                                    <p className='text-sm text-gray-600'>{caseStudy.date}</p>
                                    <hr className='border' />
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CaseStudies;