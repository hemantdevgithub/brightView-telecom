import React from "react";
import Container from "../Container/Container";

const AboutSection = () => {
    return (
        <Container>
            <section className="flex flex-col md:flex-row items-center py-8 ">
                {/* Left Side: Image */}
                <div className="w-full md:w-[40%]">
                    <img
                        src="/Home/about.jpg"
                        alt="Description of the image"
                        className="rounded-lg shadow-lg w-full h-auto"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="w-full md:w-[60%] mt-8 md:mt-0 md:ml-8">
                    <span className="text-lg font-semibold text-secondary bg-gray-100 px-4 py-2 rounded-full">
                        About Us
                    </span>
                    <h2 className="text-5xl font-bold text-primary mb-4">
                        The Best Leading Telecom Company With 10 Years of
                        Experience
                    </h2>
                    <p className="text-gray-700 leading-relaxed">
                        BrightViewTelecom has been at the forefront of the
                        telecommunications industry, providing cutting-edge
                        solutions that drive business success. Our expertise and
                        innovative approach ensure seamless connectivity and
                        superior communication for businesses of all sizes.
                    </p>
                </div>
            </section>
        </Container>
    );
};

export default AboutSection;
