import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";

const data = [
  {
    id: 1,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx_0L8Ycj8Zx6GSyzlHkcN6SFLlrIdjUo3xg&s",
    heading: "Expert Network Installation & RF Optimization Services",
    content: "  We specialize in seamless installation and commissioning of network systems, including BTS, BSC, MSC, servers, DWDM, SDH, GPON, FTTH, and Multi-Service Access Networks. With extensive experience in RF drive tests, optimization, EMF, and EMI testing, we ensure top-notch network performance. Our services also cover civil work, including tower foundations and electrical setups, backed by expertise in Huawei and Alcatel Lucent _Nokia equipment. Trust us for efficient, reliable network solutions tailored to your needs.",
    isLeft: true,
  },
  {
    id: 2,
    image: "https://img.freepik.com/free-photo/cloud-storage-banner-background_53876-108506.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1725148800&semt=ais_hybrid",
    heading: "Data Center",
    content: "Brightview Telecom offers expert Data Center services, including server rack and subrack installations, precise cabling, and optical fiber setup. Our team ensures efficient, reliable, and scalable infrastructure to meet your growing demands. We handle every aspect, from network infrastructure to cooling and power management, delivering optimized solutions tailored to your needs.",
    isLeft: false,

  },
  {
    id: 3,
    image: "https://img.freepik.com/free-vector/wireless-technology-isometric-horizontal-banners-set_1284-15267.jpg",
    heading: "Wireline Broadband Network",
    content: "Brightview Telecom specializes in delivering advanced FTTH solutions, utilizing a single optical fiber network. We collaborate with leading providers like Huawei, Alcatel Lucent, and Nokia to ensure seamless, high-speed connectivity for your broadband network needs. Our expertise guarantees a robust and efficient wireline infrastructure, designed for optimal performance and scalability.",
    isLeft: true,

  },
  {
    id: 4,
    image: "https://img.freepik.com/free-photo/civil-engineer-construction-architecture-worker-are-working-construction-site-with-tablet-blueprints-planing-about-new-construction-sitecooperation-teamwork-concept_640221-306.jpg",
    heading: "Civil Work",
    content: "Brightview Telecom provides comprehensive civil work services, including tower foundation construction and electrical installations. Our expertise ensures that your infrastructure is built on a solid foundation, with reliable electrical systems to support all your project needs.",
    isLeft: false,

  },
  {
    id: 5,
    image: "https://www.applus.com/dam/jcr:f57487de-cc8b-413f-a508-9dc5dd264f71/1340261671404-Ssheet_Drive_Test_and_Optimisation_for_wireless_networks1_EN_desktop.jpg",
    heading: "RF Drive Test",
    content: "Brightview Telecom offers expert RF Drive Testing and Optimization services, including EMF and EMI testing. We also provide tool rentals to support your RF testing needs, ensuring optimal network performance and compliance with industry standards.",
    isLeft: true,

  },
  {
    id: 5,
    image: "https://stl.tech/wp-content/uploads/2022/11/wireless-lan.jpg",
    heading: "IWAN",
    content: "Brightview Telecom specializes in implementing IWAN (Intelligent WAN) solutions tailored for Airtel. Our expertise ensures enhanced network performance, scalability, and cost efficiency, providing Airtel with a robust and intelligent WAN infrastructure.",
    isLeft: false,

  },
]

const Services = () => {
  return (
    <div>
      <TopBanner
        pageName={"Services"}
        img={"https://t3.ftcdn.net/jpg/04/95/00/16/360_F_495001640_bHTjOMfRIiDCdaYmJ9sao4clTw8e9uG9.jpg"}
        heading={"Services"}
      />
      <Container>
        <div className="py-10 font-poppins space-y-8">
          {
            data.map(({ id, image, heading, content, isLeft }) => (
              <div key={id} className={`flex flex-col *:w-full gap-10 items-center ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                <div className=" space-y-5">
                  <h1 className="text-4xl font-semibold tracking-wide">
                    {heading}
                  </h1>
                  <p className="text-gray-500 space-y-2 *:block">
                    {content}
                  </p>
                </div>
                <div>
                  <img className="rounded-xl w-full" src={image} alt="" />
                </div>
              </div>
            ))
          }
        </div>
      </Container>
    </div>
  );
};

export default Services;
