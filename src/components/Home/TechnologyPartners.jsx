import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../Container/Container";

const TechnologyPartners = () => {
    const partnerLogos = [
        "img/aws-logo.png",
        "img/logobel.png",
        "img/micromen-logo.png",
        "img/tech-data-logo.png",
    ];

    return (
        <Container>
            <div className=" overflow-hidden pb-5">
                <div className="container mx-auto py-5">
                    <div className="text-center mb-5">
                        <div className="inline-block mb-2">
                            <h5 className="text-lg font-semibold text-secondary bg-gray-200 px-3 py-1 rounded-full">
                                Technology Partner
                            </h5>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">
                            What Our Technology Partners Say
                        </h1>
                    </div>

                    <Marquee
                        gradient={false}
                        speed={50}
                        className="flex items-center justify-between"
                    >
                        {partnerLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Partner Logo ${index + 1}`}
                                className="mx-5 h-16"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </Container>
    );
};

export default TechnologyPartners;
