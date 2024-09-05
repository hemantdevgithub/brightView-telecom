import React from "react";
import { useSelector } from "react-redux";
import ProfileLayout from "../Layout/ProfileLayout";
import CustomerProfile from "../components/Profile/CustomerProfile/CustomerProfile";
import SolutionPartnerInstitutional from "../components/Profile/SolutionPartnerInstitutional/SolutionPartnerInstitutional";
import SolutionPartnerProfessionalProfile from "../components/Profile/SolutionPartnerProfessional/SolutionPartnerProfessionalProfile";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  const renderProfileContent = () => {
    switch (user?.userRole) {
      case 9238:
        return <CustomerProfile />;
      case 7483:
        return <SolutionPartnerProfessionalProfile />;
      case 2392:
        return <SolutionPartnerInstitutional />;
      default:
        return null;
    }
  };

  return <ProfileLayout>{renderProfileContent()}</ProfileLayout>;
};

// const Profile = () => {
//     const { user } = useSelector((state) => state.auth);
//     return (
//         <div className='min-h-screen flex font-poppins w-full bg-gray-100'>
//             {/* <div className='bg-white space-y-5 w-[650px] px-5 py-5'>
//                 <div className='w-full space-y-5'>
//                     <div className='flex items-center gap-3 border border-softBlue rounded-md p-2'>
//                         <ImageUpload className={''} />

//                         <div className='space-y-1'>
//                             <h4 className='flex items-center gap-2 text-gray-600'>
//                                 <MdOutlinePermIdentity />
//                                 {user?.firstName} {user?.lastName}
//                             </h4>
//                             <h4 className='flex items-center gap-2 text-gray-600 '>
//                                 <MdOutlineMailOutline />
//                                 {user?.email}
//                             </h4>
//                             <h4 className='flex items-center gap-2 text-gray-600 '>
//                                 <MdOutlinePhone />
//                                 12345678
//                             </h4>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}
//             <ProfileSidebar />
//             <div className='w-full bg-gray-100'>
//                 <ProfileInfoContainer user={user && user} />
//             </div>
//         </div>
//     );
// };

export default Profile;
