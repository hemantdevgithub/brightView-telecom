import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";
import OurClients from "../components/Home/OurClients";
import TechnologyPartners from "../components/Home/TechnologyPartners";
import TelecomClients from "../components/Home/TelecomClients";

const Client = () => {
  return (
    <div>
      <TopBanner
        pageName={"Our Clients"}
        img={"https://supportbrightviewtelecom.netlify.app/about.jpg"}
        heading={"Clients"}
      />
      <Container>
        <div className="py-10 font-poppins space-y-8">
          <h4 className="text-center text-xl font-semibold uppercase w-fit mx-auto pb-1 border-b-4 border-primary px-4">
            Our Clients
          </h4>
          <div className="w-[60%] mx-auto space-y-5">
            <p className="text-gray-500 space-y-2 *:block">
              <span>
                {" "}
                Approved By All Major OEMs Including Nokia, Huawei, Ericsson,
                ZTE, Alcatel, NEC, Samsung, NEC Ceragon Etc.
              </span>

              <span>
                Worked With All Major Operators Including Airtel , Vodafone,
                TTSL, RJIL, Samsung, Idea, MTS, Uninor, Videocon, Aircel, BSNL,
                MTNL Etc.
              </span>

              <span>Working In Nepal For Huawei & ZTE For Last 5 Years.</span>

              <span>Project Executed In 10 Circles Of India</span>

              <span>Most Valued Partner Of Huawei For Last 3 Years.</span>
            </p>
          </div>
        </div>
      </Container>
      <TechnologyPartners />
      <TelecomClients />
    </div>
  );
};

export default Client;
