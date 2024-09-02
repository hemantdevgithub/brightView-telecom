import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

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
            <PhotoProvider>
              <PhotoView src={x}>
                <img
                  className="h-[300px] w-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-lg"
                  src={x}
                  alt=""
                />
              </PhotoView>
            </PhotoProvider>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Awards;

/* 









*/
