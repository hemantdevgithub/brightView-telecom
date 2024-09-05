import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../Container/Container";
const OurClients = () => {
  const testimonials = [
    {
      id: 2,
      name: "Naveen Balusu",
      designation: "Director, Dilizent",
      testimonial:
        "HealthFROGS helped us in a critical situation with our healthcare customer by providing management consulting support in building customer journey road maps in segments of Hospital Cost Reduction Strategy, Investment in Advanced Medical Equipment, Fraud Detection, and Financial Impact. Also, their Tech team partnership enabled us to meet all KPIs and timelines in providing digital solutions to our end customers.",
      img: "https://t4.ftcdn.net/jpg/03/11/50/27/360_F_311502737_TZ2RJj273mcoaZyKBSHqbdM7QMcb6HfP.jpg",
    },
    {
      id: 2,
      name: "Phani Penmatsa",
      designation: "President Epicize",
      testimonial:
        "We pride ourselves on collaborating with HealthFROGS to assist our customers in the Healthcare segment. At the very need of security and authenticity of patient and critical data, HealthFROGS assembled a quick team of experts to achieve the key milestones with our customers. ",
      img: "https://media.licdn.com/dms/image/C4E03AQGH2XhK-l5g2A/profile-displayphoto-shrink_400_400/0/1561928039839?e=1709769600&v=beta&t=d1umcH1GPrHcFRWixQ9NUDebIbA1wuw__1wh8ObIrs4",
    },
    {
      id: 2,
      name: "Nadh",
      designation: "Vice President, RavSol",
      testimonial:
        "We desperately sought a business development partner to extend our non-healthcare products and services to the Healthcare vertical. That is when HealthFROGS chimed in, providing us with functional healthcare knowledge that helped us customize our solutions for Healthcare customers. HeathFROGS' digital marketing and sales development expertise lined us with a good number of customer meetups. ",
      img: "https://randomuser.me/api/portraits/men/75.jpg",
    },
  ];
  return (
    <div className="py-10">
      <Container>
        <div className="space-y-5">
          <h1 className="text-center text-3xl font-semibold tracking-wider font-poppins text-blue-500">
            Our Honorable Clients
          </h1>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            autoplay={{ delay: 2000 }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay]}
            className="mySwiper px-2 lg:w-[65%] mx-auto"
          >
            {testimonials.map((review) => (
              <SwiperSlide key={review.id}>
                <ClientReviewCard {...review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

const ClientReviewCard = ({ name, designation, testimonial, img }) => {
  return (
    <div className="bg-gray-100 px-10 py-5 rounded-md">
      <div className="flex flex-col justify-center lg:px-10 py-5 gap-5">
        <FaQuoteLeft className="text-xl lg:text-4xl" />
        <p className="text-sm lg:text-[15px] font-poppins">{testimonial}</p>
        <div className="flex gap-10">
          <div>
            <h3 className="text-xl font-semibold font-alegreya">{name}</h3>
            <p className="font-mono">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurClients;
