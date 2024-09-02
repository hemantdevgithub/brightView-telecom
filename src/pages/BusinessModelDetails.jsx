import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import ParaText from '../components/Shared/ParaText';
import SubHeading from '../components/Shared/SubHeading';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import { businessModels } from '../constants/business-model';

const BusinessModelDetails = () => {
    const [filteredModelSteps, setFilteredModelSteps] = useState([])
    const { category } = useParams();
    useEffect(() => {
        const filteredModelStep = businessModels.filter(b => b.model === category);
        setFilteredModelSteps(filteredModelStep)
    }, [category]);
    return (
        <div>
            <TopBanner img={"/Team/team.png"} heading={`Business Model Structure For ${category}`} />
            <Container>
                <div className='py-10'>
                    {
                        filteredModelSteps && (
                            <>
                                {filteredModelSteps.map(filteredModelSteps => (
                                    <div key={filteredModelSteps.id}>
                                        <div className='text-center'>
                                            <h1 className='text-xl lg:text-3xl font-syne flex justify-center items-center gap-5 text-blue-700'>
                                                <span className='font-semibold'>
                                                    {filteredModelSteps.heading}
                                                </span>
                                            </h1>
                                        </div>
                                        <div className='flex flex-col gap-10 my-10'>
                                            {
                                                filteredModelSteps && filteredModelSteps.descriptions?.map(des => (
                                                    <div key={des.id}
                                                        className='space-y-5'
                                                    >
                                                        <SubHeading text={des.heading} />
                                                        <ParaText>
                                                            {des.subHeading}
                                                        </ParaText>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                ))}
                            </>
                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default BusinessModelDetails;