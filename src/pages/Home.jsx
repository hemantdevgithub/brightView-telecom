import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ProvidedSolutions from "../components/Home/ProvidedSolutions";
import OurFeatures from "../components/Home/OurFeatures";
import TelecomClients from "../components/Home/TelecomClients";
import TechnologyPartners from "../components/Home/TechnologyPartners";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutSection />
            <ProvidedSolutions />
            <OurFeatures />
            <TelecomClients />
            <TechnologyPartners />
        </div>
    );
};

export default Home;
