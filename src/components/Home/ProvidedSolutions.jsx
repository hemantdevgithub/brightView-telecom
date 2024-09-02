import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../Container/Container";

const ProvidedSolutions = () => {
    const services = [
        {
            title: "Civil Work",
            image: "img/service-1.jpg",
            description: "Civil Work With Tower Foundation, Electrical Work",
        },
        {
            title: "RF Drive Test",
            image: "img/service-2.jpg",
            description:
                "RF Drive Test And RF Optimization, EMF, EMI Testing And Their Tools Renting",
        },
        {
            title: "IWAN",
            image: "img/service-3.jpg",
            description: "IWAN FOR AIRTEL.",
        },
        {
            title: "Data Center",
            image: "img/service-1.jpg",
            description:
                "Experienced Teams For Implementing Server Racks, Subrack, Cabling, Optical Fiber...",
        },
        {
            title: "Wireline Broadband Network",
            image: "img/service-2.jpg",
            description:
                "Working With Huawei /Alcatel Lucent/Nokia In FTTH Solution Uses One Optical Fiber Network...",
        },
    ];

    return (
        <Container>
            <div className="container mx-auto py-12">
                <div className="text-center mb-12" data-wow-delay="0.1s">
                    <div className="flex justify-center">
                        <h5 className="text-lg font-semibold text-secondary bg-gray-100 px-4 py-2 rounded-full">
                            Our Services
                        </h5>
                    </div>
                    <h1 className="text-4xl font-bold mb-6 text-primary">
                        What Solutions We Provide
                    </h1>
                    <p className="text-lg text-gray-600 text-center">
                        We offer a comprehensive range of telecommunication
                        solutions designed to meet your business needs. Our
                        services ensure your business stays connected and
                        productive.
                    </p>
                </div>
            </div>

            <Marquee className="p-3" autoFill={true}>
                <div className="flex space-x-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden w-72 h-96 flex-shrink-0"
                        >
                            <div className="h-52 overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                            <div className="p-4">
                                <h5 className="text-lg font-semibold text-gray-800 mb-2">
                                    {service.title}
                                </h5>
                                <p className="text-sm text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Marquee>
        </Container>
    );
};

export default ProvidedSolutions;
