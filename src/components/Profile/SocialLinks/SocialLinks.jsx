import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ValidInput from '../../Shared/Inputs/ValidInput';
import { FaEdit, FaSave } from 'react-icons/fa';
import { updateCustomerProfile } from '../../../Api/customerProfileApi';
import toast from 'react-hot-toast';
import { updateInstitutionProfile } from '../../../Api/solutionPartnerInstitutionApi';
import { updateProfessionalProfile } from '../../../Api/solutionPartnerProfessionalApi';

const SocialLinks = ({ profile, user, isLoading }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, defaultValues }, } = useForm({
        defaultValues: {
            website: profile ? profile?.website : "",
            linkedin: profile ? profile?.linkedin : "",
            facebook: profile ? profile?.facebook : "",
            twitter: profile ? profile?.twitter : "",
            instagram: profile ? profile?.instagram : "",
            youtube: profile ? profile?.youtube : "",
        }
    });

    const handleFormSubmit = async (data) => {
        try {
            switch (user.userRole) {
                case 9238:
                    const customer = await updateCustomerProfile({ data })
                    if (
                        customer.success === true && customer.statusCode === 200
                    ) {
                        toast.success(customer?.message);
                        window.location.reload();
                    }
                    break;
                case 7483:
                    const professional = await updateProfessionalProfile({ data })
                    if (
                        professional.success === true && professional.statusCode === 200
                    ) {
                        toast.success(professional?.message);
                        window.location.reload();
                    }
                    break
                case 2392:
                    const institution = await updateInstitutionProfile({ data })
                    if (
                        institution.success === true && institution.statusCode === 200
                    ) {
                        toast.success(institution?.message);
                        window.location.reload();
                    }
                    break;
                default: null
            }
        } catch (error) {
            toast.error(error?.data.message)
        }
    }
    useEffect(() => {
        // Reset the form values when the profile prop changes
        reset({
            website: profile ? profile?.website : "",
            linkedin: profile ? profile?.linkedin : "",
            facebook: profile ? profile?.facebook : "",
            twitter: profile ? profile?.twitter : "",
            instagram: profile ? profile?.instagram : "",
            youtube: profile ? profile?.youtube : "",
        });
    }, [profile, reset]);

    return (
        <div className='w-full px-10 py-5 rounded-md overflow-y-scroll h-full remove_scrollbar space-y-5'>
            <div className='flex flex-col gap-3 lg:flex-row items-center justify-between'>
                <h2 className='text-lg lg:text-xl text-softBlue'>Social Links</h2>
                <div className='flex justify-end gap-5 text-xs'>
                    <button
                        type="submit"
                        onClick={handleSubmit(handleFormSubmit)}
                        className={`border text-softBlue px-4 py-2 border-softBlue hover:bg-blue-600 hover:text-white duration-300 rounded-md flex items-center gap-2`}
                        disabled={!isEdit}
                    >
                        Save Changes
                        <FaSave />
                    </button>
                    <button
                        onClick={() => setIsEdit(!isEdit)}
                        className='border text-softBlue px-4 py-2 border-softBlue hover:bg-blue-600 hover:text-white duration-300 rounded-md flex items-center gap-2'>
                        Edit Now
                        <FaEdit />
                    </button>
                </div>
            </div>
            <form
                onSubmit={handleSubmit(handleFormSubmit)}
                className={`bg-white rounded-2xl shadow-md p-8  ${isEdit ? "opacity-100" : "opacity-40"}`}
            >
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                    <ValidInput
                        id={"website"}
                        type={"text"}
                        label={"Website Url"}
                        pText={"Your Website Url"}
                        defaultValue={defaultValues.website}
                        register={register}
                        errorName={errors.website}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"linkedin"}
                        type={"text"}
                        label={"Linkedin Url"}
                        pText={"Your Linkedin Url"}
                        defaultValue={defaultValues.linkedin}
                        register={register}
                        errorName={errors.linkedin}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"facebook"}
                        type={"text"}
                        label={"Facebook Url"}
                        pText={"Your Facebook Url"}
                        defaultValue={defaultValues.facebook}
                        register={register}
                        errorName={errors.facebook}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"twitter"}
                        type={"text"}
                        label={"Twitter Url"}
                        pText={"Your Twitter Url"}
                        defaultValue={defaultValues.twitter}
                        register={register}
                        errorName={errors.twitter}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"instagram"}
                        type={"text"}
                        label={"Instagram Url"}
                        pText={"Your Instagram Url"}
                        defaultValue={defaultValues.instagram}
                        register={register}
                        errorName={errors.instagram}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"youtube"}
                        type={"text"}
                        label={"Youtube Url"}
                        pText={"Your Youtube Url"}
                        defaultValue={defaultValues.youtube}
                        register={register}
                        errorName={errors.youtube}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                </div>
            </form>
        </div>
    );
};

export default SocialLinks;