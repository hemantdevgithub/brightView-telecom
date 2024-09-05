import React from "react";
import Container from "../components/Container/Container";
import TopBanner from "../components/Shared/TopBanner/TopBanner";

const Contact = () => {
  return (
    <div className="bg-[#f5f5f5]">
      <TopBanner
        heading={"Contact Us"}
        img={"/Banners/contact.jpg"}
        pageName={"Contact"}
      />
      <Container>
        <div className="py-24 font-poppins space-y-20">
          <div className="text-center  space-y-3">
            <p className="text-primary font-mono">Contact Now</p>
            <h3 className="font-poppins text-2xl font-semibold tracking-wider">
              Write us a Message !
            </h3>
          </div>
          {/* contact info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 w-[80%] mx-auto">
            <div className="flex gap-4 bg-white p-4 border-b-2 border-b-primary rounded-t-md">
              <img src="/Icons/globe.png" className="h-[60px]" alt="" />
              <div>
                <h3 className="text-2xl font-semibold font-poppins">Address</h3>
                <p className="">
                  S 11-12, Second Floor Adarshin Plaza 91, Adhchini New Delhi-
                  110017 India
                </p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-4 border-b-2 border-b-primary rounded-t-md">
              <img src="/Icons/phone.png" className="h-[60px]" alt="" />
              <div>
                <h3 className="text-2xl font-semibold font-poppins">Phone</h3>
                <p>+91-9891858137</p>
              </div>
            </div>
            <div className="flex gap-4 bg-white p-4 border-b-2 border-b-primary rounded-t-md">
              <img src="/Icons/mail.png" className="h-[60px]" alt="" />
              <div className="text-sm">
                <h3 className="text-2xl font-semibold font-poppins">Email</h3>
                <p>info@brightviewtelecom.com</p>
                <p>jogender.singh@bvtpl.in</p>
                <p>s.jogender@gmail.com</p>
                <p> jogender.singh@bvtpl.in</p>
              </div>
            </div>
          </div>
          {/* Form */}
          <form className="w-[80%] space-y-5 mx-auto">
            <div className="flex flex-col lg:flex-row gap-5 justify-center items-center w-full mx-auto">
              <div className="h-[200px] flex gap-5 flex-col lg:w-[50%]">
                <InputField type={"text"} pText={"Name *"} />
                <InputField type={"text"} pText={"Email *"} />
                <InputField type={"text"} pText={"Phone"} />
              </div>
              <textarea
                className="lg:w-[50%] h-[200px] font-poppins px-10 py-5 outline-none focus:border-primary border"
                placeholder="Message"
              />
            </div>
            <div className="text-center">
              <input
                type="submit"
                value="Send Message"
                className="bg-primary rounded-md text-white px-10 py-3"
              />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

const InputField = ({ pText, type, name }) => {
  return (
    <input
      type={type}
      name={name}
      className="h-full border px-10 outline-none focus:border-primary font-poppins"
      placeholder={pText}
    />
  );
};

export default Contact;
