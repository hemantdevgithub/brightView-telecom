import React from "react";
import Container from "../components/Container/Container";
import TechnologyPartners from "../components/Home/TechnologyPartners";
import TelecomClients from "../components/Home/TelecomClients";
import TopBanner from "../components/Shared/TopBanner/TopBanner";

const Client = () => {
  return (
    <div>
      <TopBanner
        pageName={"Our Clients"}
        img={"/Banners/client.jpg"}
        heading={"Clients"}
      />
      <Container>
        <div className="py-10 font-poppins space-y-8">
          <div className={`flex flex-col *:w-full gap-10 items-center lg:flex-row`}>
            <div className=" space-y-5">
              <h1 className="text-4xl font-semibold tracking-wide">
                Our Clients
              </h1>
              <p className="text-gray-500 space-y-2 *:block">
                <span>Brightview Telecom is a trusted partner, approved by all major OEMs, including industry leaders like Nokia, Huawei, Ericsson, ZTE, Alcatel, NEC, Samsung, and Ceragon. We have a proven track record of delivering successful projects for top telecom operators, including Airtel, Vodafone, TTSL, RJIL, Idea, MTS, Uninor, Videocon, Aircel, BSNL, MTNL, and Samsung.</span>
                <span>Our international footprint includes ongoing work in Nepal, where we have been providing solutions for Huawei and ZTE for the
                  past five years. In India, we have executed projects across 10 telecom circles, demonstrating our broad reach and capability. For the last three years, we have been recognized as a most valued partner by Huawei, underscoring our commitment to excellence and long-term client relationships.</span>
              </p>
            </div>
            <div>
              <img className="rounded-xl w-full" src={"/Client/client.jpg"} alt="Client Image" />
            </div>
          </div>
        </div>
      </Container>
      <TechnologyPartners />
      <TelecomClients />
    </div>
  );
};

export default Client;
