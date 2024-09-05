import React from "react";
import ProfileSidebar from "../components/Profile/ProfileSidebar";

const ProfileLayout = ({ children }) => {
  return (
    <div className="profile-container-height flex flex-col lg:flex-row font-poppins w-full bg-[#f5f5f5] ">
      <ProfileSidebar />
      <div className="w-full lg:overflow-y-scroll custom-scrollbar pb-10 bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default ProfileLayout;
