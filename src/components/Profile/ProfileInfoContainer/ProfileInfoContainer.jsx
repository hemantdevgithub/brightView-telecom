import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import ValidInput from '../../Shared/Inputs/ValidInput';
import { useSelector } from 'react-redux';
import { FaEdit, FaSave } from 'react-icons/fa';
import { createCustomerProfile } from '../../../Api/customerProfileApi';
import toast from 'react-hot-toast';

const ProfileInfoContainer = ({ user }) => {
    const { isLoading } = useSelector((state) => state.auth);
    const [isEdit, setIsEdit] = useState(false)
    const { register, handleSubmit, reset, formState: { errors, }, } = useForm({
        defaultValues: {
            firstName: user?.firstName || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            phone: "",
            country: "",
            state: "",
            city: "",
            pinCode: "",
            serviceDescription: "",
        }
    });
    const onSubmit = async (data) => {
        const { firstName, lastName, email, phone, country, state, city, pinCode, serviceDescription } = data;

        if (
            [user._id, firstName, lastName, email, phone, country, state, city, pinCode, serviceDescription].some(
                (field) => field.trim() === ""
            )
        ) {
            return toast.error("All fields are required")
        }

        try {
            const response = await createCustomerProfile({ ...data, userId: user._id });
        } catch (error) {
        }
    }
    return (
        <div className='w-full px-10 py-5 rounded-md overflow-y-scroll h-full remove_scrollbar border space-y-5'>
            <div className='flex justify-end gap-5'>
                <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
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
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={`space-y-8 ${isEdit ? "opacity-100" : "opacity-40"}`}>
                <div className='flex gap-5'>
                    <ValidInput
                        id={"firstName"}
                        type={"text"}
                        label={"First Name"}
                        pText={"Your First Name"}
                        register={register}
                        errorName={errors.firstName}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"lastName"}
                        type={"text"}
                        label={"Last Name"}
                        pText={"Your Last Name"}
                        register={register}
                        validation={{
                            required: "Last Name is required",
                        }}
                        errorName={errors.lastName}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                </div>
                <div className='flex gap-5'>
                    <ValidInput
                        id={"email"}
                        type={"email"}
                        label={"Email"}
                        value={user?.email}
                        pText={"Your Email"}
                        register={register}
                        validation={{
                            required: "Email is required",
                        }}
                        errorName={errors.email}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"phone"}
                        type={"text"}
                        label={"Phone Number"}
                        pText={"Your Phone Number"}
                        register={register}
                        validation={{
                            required: "Phone Number is required",
                        }}
                        errorName={errors.phone}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                </div>
                <div className='flex gap-5'>
                    <ValidInput
                        id={"country"}
                        type={"text"}
                        label={"Country"}
                        pText={"Your Country Name"}
                        register={register}
                        validation={{
                            required: "Country Name is required",
                        }}
                        errorName={errors.country}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"state"}
                        type={"text"}
                        label={"State"}
                        pText={"Your State Name"}
                        register={register}
                        validation={{
                            required: "State Name is required",
                        }}
                        errorName={errors.state}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                </div>
                <div className='flex gap-5'>
                    <ValidInput
                        id={"city"}
                        type={"text"}
                        label={"City"}
                        pText={"Your City Name"}
                        register={register}
                        validation={{
                            required: "City Name is required",
                        }}
                        errorName={errors.city}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                    <ValidInput
                        id={"pinCode"}
                        type={"text"}
                        label={"Pin Code"}
                        pText={"Your Pin Code"}
                        register={register}
                        validation={{
                            required: "Pin Code is required",
                        }}
                        errorName={errors.pinCode}
                        disabled={isLoading || !isEdit}
                        errors={errors}
                        className={"border border-softBlue rounded-md"}
                    />
                </div>
                <textarea
                    disabled={isLoading || !isEdit}
                    {...register("serviceDescription", { required: "Service need is required" },)}
                    placeholder='Your Service Need'
                    className='bg-gray-white p-4 h-[250px] w-full outline-none border border-softBlue rounded-md'
                />
            </form>
        </div>
    );
};


export default ProfileInfoContainer;