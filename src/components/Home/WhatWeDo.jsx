import React from "react";
import Container from "../Container/Container";

const WhatWeDo = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row justify-between items-center   ">
        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 py-5">
          <div className=" ">
            <div
              className="text-left"
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
                At Brightview Telecom, we excel in delivering top-notch
                solutions across the Telecom and IT sectors. Our expertise
                includes the installation of BTS, BSC, MSC, Access Networks, RF
                Drive testing and optimization, Data Center setups, and FTTH
                solutions.
              </p>
              <p className="text-lg text-gray-500 text-left">
                We are also leaders in IT solutions, specializing in Cloud
                services, App development, ERP systems, and more. In addition,
                we provide highly skilled technical and non-technical manpower
                to meet your project needs.
              </p>
            </div>
          </div>
        </div>

        {/* Left Side: Image */}
        <div className="w-full md:w-[40%]">
          <img
            src="/Home/what-we-do.jpg"
            alt="Description of the image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
      </section>
    </Container>
  );
};

export default WhatWeDo;
