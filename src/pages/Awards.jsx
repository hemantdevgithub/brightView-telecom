import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";

const Awards = () => {
  const certificates = [
    "img/certificate1.jpg",
    "img/certificate2.jpg",
    "img/certificate3.jpg",
    "img/partnersawrd.jpeg",
    "img/huwai2014.png",
    "img/huwai2015.png",
    "img/huwaiaward.png",
    "img/huwaiaward1.png",
    "img/hu.png",
    "img/bvtpl.png",
  ];
  return (
    <div>
      <TopBanner
        pageName={"Our Awards"}
        img={"https://supportbrightviewtelecom.netlify.app/about.jpg"}
        heading={"Awards"}
      />
      <Container>
        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mx-auto">
          {certificates.map((x, i) => (
            <div className="relative group border rounded-xl overflow-hidden">
              <img
                className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110"
                src={x}
                alt={`Certificate ${i + 1}`}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-center">
                <p className="text-lg">Award</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Awards;
