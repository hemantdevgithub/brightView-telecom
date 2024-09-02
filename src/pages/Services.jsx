import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";
import ProvidedSolutions from "../components/Home/ProvidedSolutions";

const Services = () => {
  return (
    <div>
      <TopBanner
        pageName={"Services"}
        img={"https://supportbrightviewtelecom.netlify.app/about.jpg"}
        heading={"Services"}
      />
      <Container>
        <div className="py-10 font-poppins space-y-8">
          <h4 className="text-center text-xl font-semibold uppercase w-fit mx-auto pb-1 border-b-4 border-primary px-4">
            Our Services
          </h4>
          <div className="w-[60%] mx-auto space-y-5">
            <h1 className="text-4xl font-semibold tracking-wide">
              Enabling Your Immigration Successfully
            </h1>
            <p className="text-gray-500 space-y-2 *:block">
              <span>
                Installation Of BTS, BSC, MSC, Server, Access Network, DWDM And
                SDH Network, GPON,FTTH Equipment Installation And Commissioning
              </span>

              <span>
                Installation Of Multi Service Access Network (Wire Line)
                Equipment Installation And Commissioning.
              </span>

              <span>
                Experience In RF Drive Test And Optimization, SCFT, SSCVT, EMF,
                NARDA Broadband Testing And NBM Activity.
              </span>

              <span>
                Good Experience In Huawei Optix 1832 X-8/16/7500/8800/9800 /500
                /550 ,Alcatel Lucent _Nokia – 7750 SR-14s / 7750 SR-7s / 7750
                SR-12e / 7250 IXR-R6 / 7210 SAS-K30 / 7210 SAS-MXP In OptiX
                Multi-Service Mini-WDM/OTN/OSN/CEN System Combines The OTN And
                WDM Features, Which Enables Customers To Integrate Multiple
                Access Transport Networks Into A Single Network
              </span>
            </p>
          </div>
          <ProvidedSolutions />
        </div>
      </Container>
    </div>
  );
};

export default Services;
