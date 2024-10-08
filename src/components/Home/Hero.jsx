import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
const Hero = () => {
  return (
    <div className="h-[400px] hero font-poppins bg-[url(/Home/hero.jpg)] bg-center bg-cover w-full">
      <Container>
        <div className="w-full lg:w-[65%] h-full gap-6 flex sm:text-center md:text-start flex-col items-center lg:items-start justify-center">
          <div className="bg-white/30 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg space-y-6">
            <h4 className="font-poppins text-lg lg:text-3xl flex space-x-2   ">
              Welcome To
              <span className=" text-primary ml-3 font-semibold">
                Brightview
              </span>
              <span className="text-secondary   font-semibold">Telecom</span>
            </h4>
            <h1 className="text-sm lg:text-xl ">
              We are an ISO 9001, ISO 14001, and ISO 45001 certified company,
              committed to elevating your business telecommunications with
              top-tier solutions. Trust us to deliver excellence and reliability
              in every project.
            </h1>
            {/* <h1 className='text-xl lg:text-4xl text-secondary'>
                        "Guiding Healthcare Excellence: Your Partner in Strategic Solutions for a Healthier Tomorrow."
                    </h1> */}
            <Link to={"/about"}>
              <button className="bg-primary text-white rounded-md py-3 w-[200px] flex items-center justify-center gap-3">
                Learn More
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
