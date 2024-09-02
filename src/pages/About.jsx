import React from 'react';
import WhatWeDo from '../components/Home/WhatWeDo';
import WhoWeAre from '../components/Home/WhoWeAre';
import TopBanner from '../components/Shared/TopBanner/TopBanner';

const data = [
    { id: 1, img: "https://supportbrightviewtelecom.netlify.app/img/training-1.jpg", heading: "End to end service provider for telecom and IT Solutions", title: "IELTS Coaching", subtitle: "RF Survey for 2G, 3G and 4G telecom network." },
    { id: 2, img: "https://supportbrightviewtelecom.netlify.app/img/training-2.jpg", heading: "EMI and EMF testing for tower radiation. Radiation testing drive testing and optimization", title: "Testing", subtitle: "EMI and EMF testing for tower radiation, Radiation testing, Drive test and optimization." },
    { id: 3, img: "https://supportbrightviewtelecom.netlify.app/img/training-3.jpg", heading: "Install all kind of of equipments including microwaves, BTS, BSC, IBS, MSAN etc.", title: "Installing", subtitle: "Installation of all kinds of equipment including Microwave, BTS, BSC, IBS, MSAN etc." },
    { id: 4, img: "https://supportbrightviewtelecom.netlify.app/img/training-4.jpg", heading: "Commissioning of various 2G, 3G and 4G equipments.", title: "Commissioning", subtitle: "Commissioning of various 2G, 3G and 4G equipments" },
]

const About = () => {
    return (
        <div>
            <TopBanner pageName={"About"} img={"/Banners/about.jpg"} heading={"About Us"} />
            <WhoWeAre />
            <WhatWeDo />
        </div>
    );
};

export default About;