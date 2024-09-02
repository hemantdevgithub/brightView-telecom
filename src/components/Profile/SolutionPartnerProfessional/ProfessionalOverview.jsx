import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaEdit, FaSave } from 'react-icons/fa';
import { MdOutlineDelete } from 'react-icons/md';
import { deleteProfessionalProfileEducation, deleteProfessionalProfileWorkExperience, updateProfessionalProfile } from '../../../Api/solutionPartnerProfessionalApi';
import { genders } from '../../../constants/user';
import CustomDatePicker from '../../Shared/Inputs/CustomDatePicker';
import ValidInput from '../../Shared/Inputs/ValidInput';
import SelectMenu from '../../Shared/SelectMenu';
import ValidTextarea from '../../Shared/ValidTextarea';

const ProfessionalOverview = ({ profile, user, isLoading }) => {
    const [isEdit, setIsEdit] = useState(false);
    const [isAddEduction, setIsAddEducation] = useState(false);
    const [isAddWorkOpen, setIsAddWorkOpen] = useState(false);
    const { register, handleSubmit, reset, control, setValue, formState: { errors, defaultValues }, getValues } = useForm({
        defaultValues: {
            firstName: profile?.firstName || "",
            lastName: profile?.lastName || "",
            email: user.email || profile?.email || "",
            phone: profile?.phone || "",
            about: profile?.about || "",
            gender: profile?.gender || "",
            addressLine: profile?.addressLine || "",
            country: profile?.country || "",
            city: profile?.city || "",
            state: profile?.state || "",
            pinCode: profile?.pinCode || "",
            designation: profile?.designation || "",
        }
    });

    const handleFormSubmit = async (data) => {
        try {
            const response = await updateProfessionalProfile(
                { data }
            )
            if (response.success === true && response.statusCode === 200) {
                toast.success(response.message);
            }
        } catch (error) {
            toast.error(error.data.message);
        }
    }
    useEffect(() => {
        // Reset the form values when the profile prop changes
        reset({
            firstName: profile?.firstName || "",
            lastName: profile?.lastName || "",
            email: user.email || profile?.email || "",
            phone: profile?.phone || "",
            about: profile?.about || "",
            gender: profile?.gender || "",
            addressLine: profile?.addressLine || "",
            country: profile?.country || "",
            city: profile?.city || "",
            state: profile?.state || "",
            pinCode: profile?.pinCode || "",
            designation: profile?.designation || "",
        });
    }, [profile, reset]);

    const handleDeleteEducation = async (educationId) => {
        if (!educationId) {
            return toast.error("Invalid Operation")
        }
        try {
            const response = await deleteProfessionalProfileEducation(educationId);
            if (response.success === true && response.statusCode === 200) {
                toast.success(response.message)
            }
        } catch (error) {
            toast.error(error?.data?.message);
        }
    }
    const handleDeleteWorkExperience = async (workExperienceId) => {
        if (!workExperienceId) {
            return toast.error("Invalid Operation")
        }
        try {
            const response = await deleteProfessionalProfileWorkExperience(workExperienceId);
            if (response.statusCode === 200 && response.success === true) {
                toast.success(response.message)
            }
        } catch (error) {
            toast.error(error?.data?.message);
        }
    }
    return (
        <div
            className='w-full px-10 py-5 rounded-md overflow-y-scroll h-full remove_scrollbar space-y-5'
        >
            <div className='flex flex-col gap-3 lg:flex-row items-center justify-between'>
                <h2 className='text-lg lg:text-xl text-softBlue'>Professional Overview</h2>
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
                className={`space-y-5 ${isEdit ? "opacity-100" : "opacity-40"}`}>
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <h4>Basic Details</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <ValidInput
                            id={"firstName"}
                            type={"text"}
                            label={"First Name"}
                            defaultValue={defaultValues.firstName}
                            pText={"Your First Name"}
                            register={register}
                            errorName={errors.firstName}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"lastName"}
                            type={"text"}
                            label={"Last Name"}
                            defaultValue={defaultValues.lastName}
                            pText={"Your Last Name"}
                            register={register}
                            errorName={errors.lastName}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"email"}
                            type={"email"}
                            label={"Email"}
                            defaultValue={defaultValues.email}
                            pText={"Your Email Address"}
                            register={register}
                            errorName={errors.email}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"phone"}
                            type={"text"}
                            label={"Phone Number"}
                            defaultValue={defaultValues.phone}
                            pText={"Your Phone Number"}
                            register={register}
                            errorName={errors.phone}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <ValidInput
                            id={"designation"}
                            type={"text"}
                            label={"Your Designation"}
                            defaultValue={defaultValues.designation}
                            pText={"Your Designation"}
                            register={register}
                            errorName={errors.designation}
                            disabled={!isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                        />
                        <SelectMenu
                            id={"gender"}
                            label={"Gender"}
                            register={register}
                            errorName={errors.gender}
                            disabled={!isEdit}
                            errors={errors}
                            defaultValue={defaultValues.gender}
                            pText={"Your Gender"}
                            options={genders}
                        />
                        <ValidTextarea
                            id={"about"}
                            label={"About"}
                            defaultValue={defaultValues.description}
                            register={register}
                            pText={"Brief Description About Yourself"}
                            errorName={errors.description}
                            errors={errors}
                            disabled={!isEdit}
                            containerClassName={"col-span-2"}
                        />
                    </div>
                </div>
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <h4>Address Details</h4>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                        <ValidInput
                            id={"addressLine"}
                            type={"text"}
                            label={"Address Line"}
                            pText={"Address Line"}
                            defaultValue={defaultValues.addressLine}
                            register={register}
                            errorName={errors.addressLine}
                            disabled={isLoading || !isEdit}
                            errors={errors}
                            className={"border border-softBlue rounded-md"}
                            containerClassName={"lg:col-span-2"}
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
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <div className='flex justify-between'>
                        <h4>Work Experiences</h4>
                        <button
                            type='button'
                            onClick={() => setIsAddWorkOpen(!isAddWorkOpen)}
                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'>
                            Add Work Experiences
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            profile?.workExperiences.length !== 0 ?
                                profile?.workExperiences?.map((item, index) => (
                                    <div
                                        key={index}
                                        className='border shadow-sm p-5 rounded-md space-y-1 relative'
                                    >
                                        <h4 className='font-syne text-softBlue font-semibold text-[17px]'>
                                            {item.position}
                                        </h4>
                                        <h4 className='text-[13px] text-primary'>{item.company}</h4>
                                        <div className='flex items-center gap-1 text-sm text-secondary'>
                                            <h4>{moment(item.startDate).format("DD MMM YYYY")}</h4>
                                            <span>To</span>
                                            <h4>{moment(item.endDate).format("DD MMM YYYY")}</h4>
                                        </div>
                                        <MdOutlineDelete
                                            onClick={() => handleDeleteWorkExperience(item._id)}
                                            className='rounded-full h-10 w-10 bg-pink-50 p-1 
                                        hover:bg-gray-200 cursor-pointer gray-200 duration-300 text-3xl text-red-600 absolute top-2 right-2' />
                                    </div>
                                ))
                                : <h3>No Experience Added</h3>
                        }
                    </div>
                    {
                        isAddWorkOpen && (
                            <div className='space-y-5 border p-5 rounded-md'>
                                <div className='flex justify-between items-center'>
                                    <h3>Add New Experiences</h3>
                                    <div className='flex gap-3'>
                                        <button
                                            onClick={() => setIsAddWorkOpen(false)}
                                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'
                                        >
                                            Save
                                        </button>
                                    </div>
                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <ValidInput
                                        id={"companyName"}
                                        type={"text"}
                                        label={"Company Name"}
                                        pText={"Company Name"}
                                        register={register}
                                        disabled={!isEdit}
                                        errors={errors}
                                        fieldName={"workExperiences.company"}
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <ValidInput
                                        id={"position"}
                                        type={"text"}
                                        label={"Position"}
                                        pText={"Position"}
                                        register={register}
                                        disabled={!isEdit}
                                        errors={errors}
                                        fieldName={"workExperiences.position"}
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <CustomDatePicker
                                        id={'workStartDate'}
                                        control={control}
                                        setValue={setValue}
                                        isEdit={!isEdit}
                                        label={"Start Date"}
                                        pText={"Start Date"}
                                        fieldName="workExperiences.startDate"
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <CustomDatePicker
                                        id={'workEndDate'}
                                        control={control}
                                        setValue={setValue}
                                        isEdit={!isEdit}
                                        label={"End Date"}
                                        pText={"End Date"}
                                        fieldName="workExperiences.endDate"
                                        className={"border border-softBlue rounded-md"}
                                    />
                                </div>

                            </div>
                        )
                    }
                </div>
                <div className='bg-white rounded-2xl shadow-md p-8 space-y-5'>
                    <div className='flex justify-between'>
                        <h4>Eductions</h4>
                        <button
                            type='button'
                            onClick={() => setIsAddEducation(!isAddEduction)}
                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'>
                            Add Educations
                        </button>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {
                            profile?.educations.length !== 0 ?
                                profile?.educations?.map((item, index) => (
                                    <div
                                        key={index}
                                        className='border shadow-sm p-5 rounded-md space-y-1 relative'
                                    >
                                        <h4 className='font-syne text-softBlue font-semibold text-[17px]'>
                                            {item.institution}
                                        </h4>
                                        <h4 className='text-[13px] text-primary'>{item.degree}</h4>
                                        <h4 className='text-[13px] text-primary'>
                                            Mark: {item.mark}
                                        </h4>
                                        <div className='flex items-center gap-1 text-sm text-secondary'>
                                            <h4>{moment(item.startDate).format("DD MMM YYYY")}</h4>
                                            <span>To</span>
                                            <h4>{moment(item.endDate).format("DD MMM YYYY")}</h4>
                                        </div>
                                        <MdOutlineDelete
                                            onClick={() => handleDeleteEducation(item._id)}
                                            className='rounded-full h-10 w-10 bg-pink-50 p-1 
                                        hover:bg-gray-200 cursor-pointer gray-200 duration-300 text-3xl text-red-600 absolute top-2 right-2' />
                                    </div>
                                ))
                                : <h3 className=''>No Educations Added</h3>
                        }
                    </div>
                    {
                        isAddEduction && (
                            <div className='space-y-5 border-2 p-5 rounded-xl'>
                                <div className='flex justify-between items-center'>
                                    <h3>Add New Experiences</h3>
                                    <div className='flex gap-3'>
                                        <button
                                            onClick={() => setIsAddEducation(false)}
                                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            onSubmit={() => handleSubmit(handleFormSubmit)}
                                            className=' bg-softBlue rounded-md text-white text-sm px-5 py-1'
                                        >
                                            Save
                                        </button>
                                    </div>

                                </div>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
                                    <ValidInput
                                        id={"institutionName"}
                                        type={"text"}
                                        label={"Institution Name*"}
                                        pText={"Institution Name"}
                                        register={register}
                                        disabled={!isEdit}
                                        errors={errors}
                                        fieldName={"educations.institution"}
                                        className={"border border-softBlue rounded-md"}
                                        containerClassName={"lg:col-span-2"}
                                    />
                                    <ValidInput
                                        id={"degree"}
                                        type={"text"}
                                        label={"Degree*"}
                                        pText={"Degree"}
                                        register={register}
                                        disabled={!isEdit}
                                        errors={errors}
                                        fieldName={"educations.degree"}
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <ValidInput
                                        id={"mark"}
                                        type={"text"}
                                        label={"Mark*"}
                                        pText={"Mark (In Points)"}
                                        register={register}
                                        disabled={!isEdit}
                                        errors={errors}
                                        fieldName={"educations.mark"}
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <CustomDatePicker
                                        id={'eduStartDate'}
                                        control={control}
                                        setValue={setValue}
                                        isEdit={!isEdit}
                                        label={"Start Date*"}
                                        pText={"Start Date"}
                                        fieldName="educations.startDate"
                                        className={"border border-softBlue rounded-md"}
                                    />
                                    <CustomDatePicker
                                        id={'eduEndDate'}
                                        control={control}
                                        setValue={setValue}
                                        isEdit={!isEdit}
                                        label={"End Date*"}
                                        pText={"End Date"}
                                        fieldName="educations.endDate"
                                        className={"border border-softBlue rounded-md"}
                                    />
                                </div>

                            </div>
                        )
                    }
                </div>
            </form>
        </div>
    );
};

export default ProfessionalOverview;