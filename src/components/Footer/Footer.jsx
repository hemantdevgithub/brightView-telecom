/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Footer.js
import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <Container>
                <div className=" mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold"><span>Brightview</span> <span>Telecom</span></h2>
                            <h4 className="text-white font-semibold">
                                Contact Info
                            </h4>
                            <Link to={""} className="flex items-start">
                                <span>  S 11-12, SECOND FLOOR ADARSHININ PLAZA 91,
                                    ADHCHINI NEW DELHI- 110017 INDIA</span>
                            </Link>
                            <Link to={""} className="flex items-center">

                                info@brightviewtelecom.com
                            </Link>
                            <Link to={""} className="flex items-center">

                                <span> +91-9891858137</span>
                            </Link>

                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-semibold">
                                Opening Time
                            </h4>
                            <div>
                                <h6 className="text-gray-400">Mon - Friday:</h6>
                                <p>09.00 am to 07.00 pm</p>
                            </div>
                            <div>
                                <h6 className="text-gray-400">Saturday:</h6>
                                <p>10.00 am to 05.00 pm</p>
                            </div>
                            <div>
                                <h6 className="text-gray-400">Vacation:</h6>
                                <p>All Sunday is our vacation</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-semibold">
                                QUICK LINK
                            </h4>
                            <div className="grid grid-cols-2 gap-3">
                                <Link
                                    href="/"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" /> Home
                                </Link>
                                <Link
                                    href="/about"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" /> About
                                </Link>
                                <Link
                                    href="/services"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" />{" "}
                                    Services
                                </Link>
                                <Link
                                    href="/awards"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" /> Award
                                </Link>
                                <Link
                                    href="/clients"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" />{" "}
                                    Clients
                                </Link>
                                <Link
                                    href="/contact"
                                    className="flex items-center hover:underline"
                                >
                                    <i className="fas fa-angle-right mr-2" />{" "}
                                    Contact Us
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-white font-semibold">
                                Connect With Us
                            </h4>
                            <Link
                                to={"https://www.linkedin.com/company/brightview-telecom-private-limited/?originalSubdomain=in"}
                                target="_blank"
                                className="flex items-center hover:underline"
                            >
                                <FaLinkedin size={30}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
