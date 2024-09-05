import React from "react";
import Container from "../Container/Container";

const WhoWeAre = () => {
  return (
    <Container>
      <section className="flex flex-col md:flex-row justify-between items-center  ">
        {/* Left Side: Image */}
        <div className="w-full md:w-[40%]">
          <img
            src="/Home/who-we-are.jpg"
            alt="Description of the image"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 py-5">
          <div className=" ">
            <div className="text-left mb-8" data-wow-delay="0.1s">
              <div className="mb-3">
                <h5 className="text-lg font-semibold text-secondary bg-gray-100 px-4 py-2 rounded-full inline-block">
                  Who We Are?
                </h5>
              </div>
              <h1 className="text-4xl font-bold mb-4 text-primary">
                Trusted Telecom and IT Solutions Provider Since 2008
              </h1>
              <p className="text-lg text-gray-500 text-left mb-3">
                Brightview Telecom was incorporated in 2008. Since then,
                Brightview has been providing various solutions to its clients
                in the field of Telecom, IT, and Manpower.
              </p>
              <p className="text-lg text-gray-500 text-left">
                With specialized delivery teams, experienced management, and a
                long-term vision, Brightview is a respected name in the field of
                Telecom and IT.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhoWeAre;
