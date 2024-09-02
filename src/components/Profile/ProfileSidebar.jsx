import React from 'react';
import toast from 'react-hot-toast';
import { MdOutlineMailOutline, MdOutlinePermIdentity } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { uploadCustomerProfilePhoto } from '../../Api/customerProfileApi';
import { uploadInstitutionsProfilePhoto } from '../../Api/solutionPartnerInstitutionApi';
import { uploadSolutionPartnerProfilePhoto } from '../../Api/solutionPartnerProfessionalApi';
import ImageUpload from '../Shared/ImageUpload';
import QuickLinks from './QuickLinks';
const ProfileSidebar = () => {
    const { user } = useSelector((state) => state.auth);
    const { profile } = useSelector((state) => state.profile)
    const sidebarItems = [
        { id: 1, label: "Basic Information", Icon: "FaUser", role: [9238] },
        { id: 1, label: "Institutional Overview", Icon: "FaUser", role: [2392] },
        // { id: 1, label: "Company Information", Icon: "FaUser" },
        { id: 1, label: "Corporate Overview", Icon: "FaUser", role: [7483] },
        // { id: 1, label: "Financial Snapshot", Icon: "FaUser" },
        // { id: 1, label: "Major Expertise", Icon: "FaUser" },
        // { id: 1, label: "Team", Icon: "FaUser" },
        // { id: 1, label: "Customer Information", Icon: "FaUser" },
        { id: 1, label: "Social Links", Icon: "FaUser", role: [9238, 7483, 2392] },
    ];

    const handleUploadImage = async (image) => {
        if (!image) {
            return null;
        }
        try {
            const { userRole } = user;
            const { public_id } = profile?.photo || {};

            switch (userRole) {
                case 9238:
                    const customerPhotoResponse = await uploadCustomerProfilePhoto({ photo: image, publicId: public_id && public_id });
                    if (
                        customerPhotoResponse.success === true && customerPhotoResponse.statusCode === 200
                    ) {
                        toast.success(customerPhotoResponse?.message);
                    }
                    break;
                case 7483:
                    const solutionPartnerProfessionalResponse =
                        await uploadSolutionPartnerProfilePhoto({ photo: image, publicId: public_id && public_id });
                    if (
                        solutionPartnerProfessionalResponse.success === true
                        && solutionPartnerProfessionalResponse.statusCode === 200
                    ) {
                        toast.success(solutionPartnerProfessionalResponse?.message);
                    }
                    break;
                case 2392:
                    const institutionProfileResponse =
                        await uploadInstitutionsProfilePhoto({ photo: image, publicId: public_id && public_id });
                    if (
                        institutionProfileResponse.success === true
                        && institutionProfileResponse.statusCode === 200
                    ) {
                        toast.success(institutionProfileResponse?.message);
                    }
                    break;
                default:
                    break;
            }
        } catch (error) {
            toast.error(error?.data?.message);
        }
    }
    return (
        <div className='bg-gray-50 space-y-4 lg:w-[450px] px-5 py-5'>
            <div className='flex flex-col items-center gap-5'>
                <ImageUpload
                    role={user.userRole}
                    userImage={profile?.photo?.url}
                    handleUploadImage={handleUploadImage}
                    className={`w-[150px] h-[150px] mx-auto`} />
                <div className='w-full border border-softBlue px-4 py-3 rounded-md  space-y-2  text-secondary'>
                    {
                        user?.userRole === 7483 && (
                            <>
                                <h1 className='flex items-center gap-2 text-sm'>
                                    <MdOutlinePermIdentity />
                                    ID: {profile?.professionalId}
                                </h1>
                                <h1 className='flex items-center gap-2 text-sm text-softBlue'>
                                    <MdOutlinePermIdentity className='text-secondary' />
                                    {profile?.firstName} {profile?.lastName}
                                </h1>
                            </>
                        )
                    }
                    {
                        user?.userRole === 9238 && (
                            <>
                                <h1 className='flex items-center gap-2 text-sm'>
                                    <MdOutlinePermIdentity />
                                    <span>Customer ID:</span>
                                    {profile?.customerId}
                                </h1>
                                <h1 className='flex items-center gap-2 text-sm'>
                                    <MdOutlinePermIdentity />
                                    <span>Company Name:</span>
                                    <span className='text-softBlue font-semibold font-syne'>
                                        {profile?.companyName || "Not Provided Yet"}
                                    </span>
                                </h1>
                            </>
                        )
                    }
                    {
                        user?.userRole === 2392 && (
                            <>
                                <h1 className='flex items-center gap-2 text-sm'>
                                    <MdOutlinePermIdentity />
                                    <span>Institution ID:</span>
                                    {profile?.institutionId}
                                </h1>
                                <h1 className='flex items-center gap-2 text-sm'>
                                    <MdOutlinePermIdentity />
                                    <span>Company Name:</span>
                                    <span className='text-softBlue font-semibold font-syne'>
                                        {profile?.institutionName || "Not Provided Yet"}
                                    </span>
                                </h1>
                            </>
                        )
                    }
                    <h1 className='flex items-center gap-2 text-sm'>
                        <MdOutlineMailOutline />
                        {user?.email}
                    </h1>
                </div>
            </div>
            <div className='h-[1px] bg-blue-400 w-full rounded-md'></div>
            <QuickLinks
                profile={profile}
                sidebarItems={sidebarItems.filter(item => item.role.includes(user.userRole))}
            />
        </div>
    );
};

export default ProfileSidebar;