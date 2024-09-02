/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Footer.js
import React from "react";
import Container from "../Container/Container";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <Container>
                <div className=" mx-auto py-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <h4 className="text-primary font-semibold">
                                Contact Info
                            </h4>
                            <a href="" className="flex items-start">
                                <i className="fa fa-map-marker-alt mr-2 mt-1" />
                                S 11-12, SECOND FLOOR ADARSHININ PLAZA 91,
                                ADHCHINI NEW DELHI- 110017 INDIA
                            </a>
                            <a href="" className="flex items-center">
                                <i className="fas fa-envelope mr-2" />
                                info@brightviewtelecom.com
                            </a>
                            <a href="" className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="21"
                                    viewBox="0 0 24 24"
                                    className="mr-2"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3M16 8h-2q-.425 0-.712-.288T13 7t.288-.712T14 6h2V4q0-.425.288-.712T17 3t.713.288T18 4v2h2q.425 0 .713.288T21 7t-.288.713T20 8h-2v2q0 .425-.288.713T17 11t-.712-.288T16 10z"
                                    />
                                </svg>
                                <span> +91-9891858137</span>
                            </a>
                            <div className="flex space-x-3 mt-4">
                                <a
                                    className="text-gray-400 hover:text-white"
                                    href=""
                                >
                                    <i className="fab fa-facebook-f" />
                                </a>
                                <a
                                    className="text-gray-400 hover:text-white"
                                    href=""
                                >
                                    <i className="fab fa-twitter" />
                                </a>
                                <a
                                    className="text-gray-400 hover:text-white"
                                    href=""
                                >
                                    <i className="fab fa-instagram" />
                                </a>
                                <a
                                    className="text-gray-400 hover:text-white"
                                    href=""
                                >
                                    <i className="fab fa-linkedin-in" />
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-primary font-semibold">
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
                            <h4 className="text-primary font-semibold">
                                QUICK LINK
                            </h4>
                            <a
                                href="/"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" /> Home
                            </a>
                            <a
                                href="/about"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" /> About
                            </a>
                            <a
                                href="/services"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Services
                            </a>
                            <a
                                href="/awards"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" /> Award
                            </a>
                            <a
                                href="/clients"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Clients
                            </a>
                            <a
                                href="/contact"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Contact Us
                            </a>
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-primary font-semibold">
                                Our Partner
                            </h4>
                            <a
                                href=""
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Samsung
                            </a>
                            <a
                                href="#"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" /> Nokia
                            </a>
                            <a
                                href="#"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" /> ZTE
                            </a>
                            <a
                                href="#"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Vodafone
                            </a>
                            <a
                                href="#"
                                className="flex items-center hover:underline"
                            >
                                <i className="fas fa-angle-right mr-2" />{" "}
                                Ericsson
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
