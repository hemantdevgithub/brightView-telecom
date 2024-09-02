import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Contact from '../pages/Contact';
// import FounderPortfolio from '../pages/FounderPortfolio';
import Awards from '../pages/Awards';
import Client from '../pages/Client';
import Home from '../pages/Home';
import Services from '../pages/Services';

const RouterHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/awards" element={<Awards />} />
        </Routes>
    );
};

export default RouterHandler;