import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";
import { caseStudies } from "../constants/caste-study";
import { healthcareServices } from "../constants/services";

const ServiceDetails = () => {
  const { service, subService } = useParams();
  const { state } = useLocation();
  const singleService = healthcareServices.find(
    (service) => service.id === state.serviceId
  );
  const filteredSubService = healthcareServices
    .find((service) => service.id === state.serviceId)
    .services.find((s) => s.id === state.subServiceId);
  return (
    <div>
      <TopBanner img={"/Team/team.png"} heading={"Service Details"} />
      <Container>
        <div className="py-10 flex flex-col lg:flex-row gap-5">
          <div className="w-full lg:w-[70%] space-y-10">
            <h3 className="text-center text-4xl border-b-2 border-primary py-3 text-primary font-poppins">
              {filteredSubService.service}
            </h3>
            <ul className="list-disc space-y-3 text-lg font-poppins">
              {filteredSubService.points.map((p) => (
                <li>{p}</li>
              ))}
            </ul>
          </div>
          <div className="w-full lg:w-[30%] space-y-5">
            <h3 className="text-2xl font-poppins">Case Studies</h3>
            <div className="flex flex-col gap-5">
              {caseStudies
                .filter((s) => s.category === singleService.category)
                .map((caseStudy) => (
                  <Link
                    to={`/insights-details/${caseStudy.id}`}
                    state={{ id: caseStudy.id }}
                  >
                    <div className="font-poppins space-y-3 group border-primary border rounded-md">
                      <div className="overflow-hidden ">
                        <img
                          src={caseStudy.thumbnail}
                          className="h-[230px] group-hover:scale-105 w-full duration-300 object-cover"
                          alt="case study images"
                        />
                      </div>
                      <div className="px-5 space-y-3">
                        <p className="uppercase font-poppins font-semibold text-orange-400 tracking-wider">
                          {caseStudy.category}
                        </p>
                        <h4 className="text-lg text-gray-600 font-semibold group-hover:text-primary duration-300">
                          {caseStudy.title}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {caseStudy.date}
                        </p>
                      </div>
                      <hr className="border" />
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ServiceDetails;
