import React from 'react';
import Container from '../components/Container/Container';
import TopBanner from '../components/Shared/TopBanner/TopBanner';
import { teams } from '../constants/team';

const Teams = () => {
    return (
        <div>
            <TopBanner heading={"Our Team Members"} img={"/Team/team.png"} />
            <div className='bg-[#fff] py-10'>
                <Container>
                    <div className=' font-syne grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
                        {teams && teams.map(team => (
                            <div
                                key={team.id}
                                className='p-3 border rounded-md bg-white flex flex-col gap-3 shadow-lg w-fit'>
                                <img src={team.img} className='h-[300px] w-full object-cover' alt="" />
                                <div className='w-full text-center space-y-2'>
                                    <h3 className='text-2xl font-syne text-primary'>
                                        {team.name}
                                    </h3>
                                    <p className='text-secondary'>{team.designation}</p>
                                    <p className='text-sm text-secondary'>
                                        {team.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Teams;