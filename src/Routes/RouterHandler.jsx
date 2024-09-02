import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from '../PrivateRoutes/PrivateRoute';
import About from '../pages/About';
import BusinessChallenges from '../pages/BusinessChallenges';
import BusinessModel from '../pages/BusinessModel';
import BusinessModelDetails from '../pages/BusinessModelDetails';
import CaseStudies from '../pages/CaseStudies';
import CaseStudyCategory from '../pages/CaseStudyCategory';
import CaseStudyDetails from '../pages/CaseStudyDetails';
import Contact from '../pages/Contact';
import Customers from '../pages/Customers';
import FAQ from '../pages/FAQ';
// import FounderPortfolio from '../pages/FounderPortfolio';
import HealthcareMCR from '../pages/HealthcareMCR';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import ServiceDetails from '../pages/ServiceDetails';
import Services from '../pages/Services';
import SignUp from '../pages/SignUp';
import Teams from '../pages/Teams';

const RouterHandler = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/customers/:slug" element={<Customers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/healthcare-management-consulting-roadmap" element={<HealthcareMCR />} />
            <Route path="/insights" element={<CaseStudies />} />
            <Route path="/insights/:category" element={<CaseStudyCategory />} />
            <Route path="/insights-details/:id" element={<CaseStudyDetails />} />
            <Route path="/our-team" element={<Teams />} />
            {/* <Route path="/founder-portfolio" element={<FounderPortfolio />} /> */}
            {/* <Route path="/solution-partners" element={<BusinessChallenges />} /> */}
            <Route path="/business-model" element={<BusinessModel />} />
            <Route path="/business-model/:category" element={<BusinessModelDetails />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/services/:redirect" element={<Services />} />
            <Route path="/services/:service/:subService" element={<ServiceDetails />} />
            {/* <Route path="/client-testimonials" element={<ClientAndTestimonial />} /> */}
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />

            {/* private routes */}
            <Route
                path="/solution-partners" element={<BusinessChallenges />} />
            <Route path="/user-profile" element={<PrivateRoute element={Profile} />} />
            {/* <PrivateRoute path="/login" element={Profile}/> */}
        </Routes>
    );
};

export default RouterHandler;