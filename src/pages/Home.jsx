import React from 'react';
import Hero from '../components/Home/Hero';
import OurServices from '../components/Home/OurServices';
import OurSupport from '../components/Home/OurSupport';
import OurClients from '../components/Home/OurClients';
import RoadMap from '../components/Home/RoadMap';

const Home = () => {
    return (
        <div>
            <Hero />
            <OurServices />
            <RoadMap />
            <OurClients />
            <OurSupport />
        </div>
    );
};

export default Home;