import React from "react";
import Container from "../Container/Container";

const OurFeatures = () => {
    return (
        <Container>
            <div className="flex flex-wrap">
                {/* Who We Are Section Start */}
                <div className="w-full md:w-1/2 py-5">
                    <div className="px-4">
                        <div className="text-center mb-8" data-wow-delay="0.1s">
                            <div className="mb-3">
                                <h5 className="text-lg font-semibold text-secondary bg-gray-100 px-4 py-2 rounded-full inline-block">
                                    Who We Are?
                                </h5>
                            </div>
                            <h1 className="text-4xl font-bold mb-4 text-primary">
                                WE ARE AN ISO 9001 AND OHSAS 18001 CERTIFIED
                                COMPANY.
                            </h1>
                            <p className="text-lg text-gray-500 text-left mb-3">
                                Brightview Telecom was incorporated in 2008.
                                Since then, Brightview has been providing
                                various solutions to its clients in the field of
                                Telecom, IT, and Manpower.
                            </p>
                            <p className="text-lg text-gray-500 text-left">
                                With specialized delivery teams, experienced
                                management, and a long-term vision, Brightview
                                is a respected name in the field of Telecom and
                                IT.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Who We Are Section End */}

                {/* What We Do Section Start */}
                <div className="w-full md:w-1/2 py-5">
                    <div className="px-4">
                        <div
                            className="text-center"
                            data-wow-delay="0.1s"
                            style={{ marginBottom: 70 }}
                        >
                            <div className="mb-3">
                                <h5 className="text-lg font-semibold text-secondary bg-gray-100 px-4 py-2 rounded-full inline-block">
                                    What We Do?
                                </h5>
                            </div>
                            <h1 className="text-4xl font-bold mb-4 text-primary">
                                Our Expertise & Services
                            </h1>
                            <p className="text-lg text-gray-500 text-left mb-3">
                                Brightview Telecom specializes in the
                                installation of BTS, BSC, MSC, Access Network,
                                RF Drive test and optimization, Data center
                                setups, and FTTH Solutions.
                            </p>
                            <p className="text-lg text-gray-500 text-left">
                                We are experts in providing IT solutions in the
                                field of Cloud, App development, ERP, etc.
                                Additionally, we supply both technical and
                                non-technical manpower.
                            </p>
                        </div>
                    </div>
                </div>
                {/* What We Do Section End */}
            </div>
        </Container>
    );
};

export default OurFeatures;
