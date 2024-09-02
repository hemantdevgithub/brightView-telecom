import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import { caseStudies } from '../constants/caste-study';

const CaseStudyDetails = () => {
    const { id } = useParams();
    const filteredStudy = caseStudies.find(study => study.id === parseInt(id));
    return (
        <div className='bg-[#f5f5f5] font-syne py-10'>
            <Container>
                <div className='w-full flex flex-col lg:flex-row gap-3'>
                    <div className='lg:w-[70%]'>
                        {
                            filteredStudy && (
                                <div className='w-full border border-blue-400 rounded-b-md'>
                                    <img src={filteredStudy.thumbnail} className='w-full' alt="" />
                                    <div className='space-y-5 p-3'>
                                        <div className='flex items-center justify-between'>
                                            <p className='uppercase text-xs text-orange-400 font-syne font-semibold'>{filteredStudy.category}</p>
                                            <p className='text-xs'>{filteredStudy.date}</p>
                                        </div>
                                        <h4 className='text-xl'>
                                            {filteredStudy.title}
                                        </h4>
                                        <div className='w-full h-[1px] bg-primary'></div>
                                        <p className='text-secondary'>
                                            {filteredStudy.content}
                                        </p>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className='w-[30%] border h-[400px]'>
                        <h1>Featured Blogs will be here</h1>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default CaseStudyDetails;