import React from "react";
import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import ProvidedSolutions from "../components/Home/ProvidedSolutions";
import TelecomClients from "../components/Home/TelecomClients";
import TechnologyPartners from "../components/Home/TechnologyPartners";
import WhoWeAre from "../components/Home/WhoWeAre";
import WhatWeDo from "../components/Home/WhatWeDo";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <ProvidedSolutions />
      <WhoWeAre />
      <WhatWeDo />
      <TelecomClients />
      <TechnologyPartners />
    </div>
  );
};

export default Home;
