import React, { useEffect, useState } from 'react';
import ValidInput from '../../Shared/Inputs/ValidInput';
import { useForm } from 'react-hook-form';
import { FaEdit, FaSave } from 'react-icons/fa';
import SelectMenu from '../../Shared/SelectMenu';
import { industries } from '../../../constants/user';
import ValidTextarea from '../../Shared/ValidTextarea';
import { updateInstitutionProfile } from '../../../Api/solutionPartnerInstitutionApi';
import toast from 'react-hot-toast';

const InstitutionalOverview = ({ profile, user, isLoading }) => {
    const [isEdit, setIsEdit] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, defaultValues }, } = useForm({
        defaultValues: {
            institutionName: profile ? profile?.institutionName : "",
            email: user?.email || profile ? profile?.email : "",
            secondaryEmail: profile ? profile?.secondaryEmail : "",
            phone: profile ? profile?.phone : "",
            institutionSize: profile ? profile?.institutionSize : "",
            institutionDescription: profile ? profile?.institutionDescription : "",
            serviceDescription: profile ? profile?.serviceDescription : "",
            industry: profile ? profile?.industry : "",
            founderName: profile ? profile?.founderName : "",
            foundedIn: profile ? profile?.foundedIn : "",
            addressLine1: profile ? profile?.addressLine1 : "",
            addressLine2: profile ? profile?.addressLine2 : "",
            country: profile ? profile?.country : "",
            state: profile ? profile?.state : "",
            city: profile ? profile?.city : "",
            pinCode: profile ? profile?.pinCode : "",
        }
    });


    const handleProfileSubmit = async (data) => {
        try {
            const response = await updateInstitutionProfile({ data })
            if (response.success === true && response.statusCode === 200) {
                toast.success(response.message);
            }
        } catch (error) {
            toast.error(error?.data?.message)
        }
    }

    useEffect(() => {
        // Reset the form values when the profile prop changes
        reset({
            institutionName: profile ? profile?.institutionName : "",
            email: user?.email || profile ? profile?.email : "",
            secondaryEmail: profile ? profile?.secondaryEmail : "",
            phone: profile ? profile?.phone : "",
            institutionSize: profile ? profile?.institutionSize : "",
            institutionDescription: profile ? profile?.institutionDescription : "",
            serviceDescription: profile ? profile?.serviceDescription : "",
            industry: profile ? profile?.industry : "",
            founderName: profile ? profile?.founderName : "",
            foundedIn: profile ? profile?.foundedIn : "",
            addressLine1: profile ? profile?.addressLine1 : "",
            addressLine2: profile ? profile?.addressLine2 : "",
            country: profile ? profile?.country : "",
            state: profile ? profile?.state : "",
            city: profile ? profile?.city : "",
            pinCode: profile ? profile?.pinCode : "",
        });
    }, [profile, reset]);

    return (
        <div className='w-full px-10 py-5 rounded-md overflow-y-scroll h-full remove_scrollbar space-y-5'>
            <div className='flex flex-col gap-3 lg:flex-row items-center justify-between'>
                <h2 className='text-lg lg:text-xl text-softBlue'>Institution Overview</h2>
                <div className='flex justify-end gap-5 text-xs'>
                    <button
                        type="submit"
                        onClick={handleSubmit(handleProfileSubmit)}
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
                onSubmit={handleSubmit(handleProfileSubmit)}
                className={`space-y-8 ${isEdit ? "opacity-100" : "opacity-40"}`}>
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <h4>Institution Details</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <ValidInput
                            id={"institutionName"}
                            type={"text"}
                            label={"Institution Name"}
                            defaultValue={defaultValues.institutionName}
                            pText={"Your Institution Name"}
                            register={register}
                            errorName={errors.institutionName}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"email"}
                            type={"email"}
                            label={"Email"}
                            value={user?.email}
                            pText={"Your Email"}
                            register={register}
                            errorName={errors.email}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"phone"}
                            type={"text"}
                            label={"Phone Number"}
                            pText={"Phone Number"}
                            defaultValue={defaultValues.phone}
                            register={register}
                            errorName={errors.phone}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"institutionSize"}
                            type={"text"}
                            label={"Institution Size"}
                            defaultValue={defaultValues.institutionSize}
                            pText={"Your Institution Size"}
                            register={register}
                            errorName={errors.institutionSize}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"secondaryEmail"}
                            type={"email"}
                            label={"Secondary Email (Optional)"}
                            pText={"Secondary Email"}
                            register={register}
                            errorName={errors.secondaryEmail}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <SelectMenu
                            id={"industry"}
                            label={"Industry"}
                            register={register}
                            errorName={errors.industry}
                            disabled={!isEdit}
                            errors={errors}
                            defaultValue={defaultValues.industry}
                            pText={"Your Industry"}
                            options={industries}
                        />
                        <ValidInput
                            id={"founderName"}
                            type={"text"}
                            label={"Founder Name"}
                            pText={"Founder Name"}
                            register={register}
                            errorName={errors.founderName}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"foundedIn"}
                            type={"text"}
                            label={"Founded In"}
                            pText={"Founded In"}
                            register={register}
                            errorName={errors.foundedIn}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidTextarea
                            id={"institutionDescription"}
                            defaultValue={defaultValues.institutionDescription}
                            disabled={isLoading || !isEdit}
                            register={register}
                            label={"Institution Description"}
                            pText={"Brief Description About Institution"}
                            errorName={errors.institutionDescription}
                            containerClassName={"lg:col-span-2"}
                        />
                        <ValidTextarea
                            id={"serviceDescription"}
                            defaultValue={defaultValues.serviceDescription}
                            disabled={isLoading || !isEdit}
                            register={register}
                            label={"Service Description"}
                            pText={"Brief Description About You Services"}
                            errorName={errors.companyDescription}
                            containerClassName={"lg:col-span-2"}
                        />
                    </div>
                </div>
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <h4>Address</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <ValidInput
                            id={"addressLine1"}
                            type={"text"}
                            label={"Address Line 1"}
                            pText={"Address Line 1"}
                            defaultValue={defaultValues.addressLine1}
                            register={register}
                            errorName={errors.addressLine1}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"addressLine2"}
                            type={"text"}
                            label={"Address Line 2 (Optional)"}
                            pText={"Address Line 2"}
                            defaultValue={defaultValues.addressLine2}
                            register={register}
                            errorName={errors.addressLine2}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"country"}
                            type={"text"}
                            label={"Country"}
                            pText={"Country Name"}
                            defaultValue={defaultValues.country}
                            register={register}
                            errorName={errors.country}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"state"}
                            type={"text"}
                            label={"State"}
                            pText={"State Name"}
                            defaultValue={defaultValues.state}
                            register={register}
                            errorName={errors.state}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"city"}
                            type={"text"}
                            label={"City"}
                            pText={"City Name"}
                            defaultValue={defaultValues.city}
                            register={register}
                            errorName={errors.city}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"pinCode"}
                            type={"text"}
                            label={"Pin Code"}
                            pText={"Pin Code"}
                            defaultValue={defaultValues.pinCode}
                            register={register}
                            errorName={errors.pinCode}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default InstitutionalOverview;