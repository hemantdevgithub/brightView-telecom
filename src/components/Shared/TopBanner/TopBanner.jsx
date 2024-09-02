import React from "react";
const TopBanner = ({ img, heading, pageName, subHeading }) => {
    return (
        <div
            className={`w-full h-[600px] bg-center  bg-cover bg-no-repeat relative`}
        >
            <img
                src={img}
                className="w-full absolute h-full object-left object-cover "
                alt=""
            />
            {
                <div className={`w-full h-full text-white absolute bg-gradient-to-b opacity-50 to-slate-900 from-gray-900 ${img === '/Home/service-bg.jpg' && 'hidden'}`}></div>
            }
            <div className="w-full h-full z-10  flex absolute justify-start items-center">
                <div className=" space-y-7 flex flex-col px-5 lg:px-20">
                    <h2 className="text-3xl lg:text-5xl text-white font-syne uppercase font-semibold">
                        {heading}
                    </h2>
                    <p className="text-yellow-200 w-[75%] font-syne text-xl">
                        {subHeading}
                    </p>
                    {/* <button className="flex font-syne w-fit items-center gap-3 bg-[#FFFFFF1F] py-3 px-3 text-white">
            <span>Home</span> <FaArrowRight />{" "}
            <span>{pageName}</span>
          </button> */}
                </div>
            </div>
        </div>
    );
};

export default TopBanner;
