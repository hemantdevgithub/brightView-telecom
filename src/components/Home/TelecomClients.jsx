import React from "react";
import Marquee from "react-fast-marquee";
import Container from "../Container/Container";

const TelecomClients = () => {
    const clientLogos = [
        "img/ericsson-logo.png",
        "img/huawei-logo.png",
        "img/nokia-logo.png",
        "img/samsung-logo.png",
        "img/five.png",
        "img/three.png",
        "img/two.png",
        "img/one.png",
        "img/four.png",
    ];

    return (
        <Container>
            <div className=" overflow-hidden pb-5">
                <div className="container mx-auto py-5">
                    <div className="text-center mb-5">
                        <div className="inline-block mb-2">
                            <h5 className="text-lg font-semibold text-secondary bg-gray-200 px-3 py-1 rounded-full">
                                Telecom Clients
                            </h5>
                        </div>
                        <h1 className="text-4xl font-bold mb-4">
                            What Our Clients Say
                        </h1>
                        <p className="text-lg text-gray-600">
                            Our clients trust BrightViewTelecom for our reliable
                            and innovative telecommunication solutions.
                        </p>
                    </div>

                    <Marquee
                        gradient={false}
                        speed={50}
                        className="flex items-center justify-between"
                    >
                        {clientLogos.map((logo, index) => (
                            <img
                                key={index}
                                src={logo}
                                alt={`Client Logo ${index + 1}`}
                                className="mx-5 h-16"
                            />
                        ))}
                    </Marquee>
                </div>
            </div>
        </Container>
    );
};

export default TelecomClients;
