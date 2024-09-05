import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerUser } from "../Api/authApi";
import ValidInput from "../components/Shared/Inputs/ValidInput";
import Modal from "../components/Shared/Modal";
import { roles } from "../constants/user";
const SignUp = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const { isLoading } = useSelector((state) => state.auth);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, defaultValues },
    setValue,
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      companyName: "",
      institutionName: "",
      email: "",
      password: "",
      role: "",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      const response = await registerUser({ data });
      if (response.success === true || statusCode === 200) {
        toast.success(response.message);
        toast.success("Please Login Now..!");
        navigate("/login", { replace: true });
      }
    } catch (error) {
      toast.error(error?.data.message);
    }
  };
  return (
    <div
      className={`w-full relative bg-gray-100 flex flex-col lg:flex-row font-poppins`}
    >
      <div
        className={
          isModalOpen
            ? "absolute h-full backdrop--sm w-full mx-auto flex justify-center items-center"
            : "hidden"
        }
      >
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <div className="space-y-5">
            <h1 className="text-center text-2xl font-poppins text-softBlue">
              How You Want To Join ?
            </h1>
            <div className="grid grid-cols-3 gap-5 px-5 text-center">
              {roles.map((role, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setValue("role", role.roleId);
                    setUserRole(role.roleId);
                    setIsModalOpen(false);
                  }}
                  className="flex gap-3 justify-center cursor-pointer items-center border border-softBlue p-4 rounded-md hover:bg-gray-100 duration-300"
                >
                  <p>{role.roleName}</p>
                </div>
              ))}
            </div>
          </div>
        </Modal>
      </div>
      <div className="min-h-full text-white hidden lg:w-[40%] bg-softBlue lg:flex justify-center text-center items-center">
        <div className="space-y-8  w-[80%] mx-auto">
          {/* <h1 className='text-4xl font-poppins'>Welcome To HealthFROGS</h1> */}
          <p className="text-2xl">Already Have Account ?</p>
          <p>
            Login in to your account so you can continue building and editing
            your onboarding team
          </p>
          <button className="border uppercase px-8 py-2 rounded-md hover:bg-primary duration-300">
            <Link to={"/login"}>Login Now</Link>
          </button>
        </div>
      </div>
      <div className="h-full lg:w-[60%] py-20 flex flex-col items-center justify-center space-y-5">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl text-softBlue font-extrabold">
            Sign Up for an Account
          </h1>
          <p className="lg:w-[60%] mx-auto text-center text-secondary">
            Let's get you all set up so you can start creating your first
            onboarding experience
          </p>
        </div>
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          className="px-5 lg:w-[60%] mx-auto space-y-5"
        >
          {/* <div className='flex items-center justify-center'>
                        {
                            userRole && userRole === 9238 ? (
                                <ValidInput
                                    id={"companyName"}
                                    type={"text"}
                                    label={"Company Name"}
                                    defaultValue={defaultValues.companyName}
                                    pText={"Your Company Name"}
                                    register={register}
                                    errorName={errors.companyName}
                                    disabled={isLoading}
                                    errors={errors}
                                    className={"border border-softBlue rounded-md"}
                                />
                            ) : userRole === 2392 ? (
                                <ValidInput
                                    id={"institutionName"}
                                    type={"text"}
                                    label={"Institution Name"}
                                    defaultValue={defaultValues.institutionName}
                                    pText={"Your Institution Name"}
                                    register={register}
                                    errorName={errors.institutionName}
                                    disabled={isLoading}
                                    errors={errors}
                                    className={"border border-softBlue rounded-md"}
                                />
                            ) : userRole === 7483 ? (
                                <div className='flex w-full items-center justify-center'>
                                    <ValidInput
                                        id={"firstName"}
                                        type={"text"}
                                        label={"First Name"}
                                        pText={"Your First Name"}
                                        register={register}
                                        validation={{
                                            required: "First Name is required",
                                        }}
                                        errorName={errors.firstName}
                                        disabled={isLoading}
                                        errors={errors}
                                    />
                                    <ValidInput
                                        id={"lastName"}
                                        type={"text"}
                                        label={"Last Name"}
                                        pText={"Your Last Name"}
                                        register={register}
                                        validation={{
                                            required: "Last Name is required"
                                        }}
                                        errorName={errors.lastName}
                                        disabled={isLoading}
                                        errors={errors}
                                    />
                                </div>
                            ) : null
                        }
                    </div> */}
          {/* Email */}
          <ValidInput
            id={"email"}
            type={"email"}
            label={"Email"}
            pText={"You Email Address"}
            register={register}
            validation={{
              required: "Email is required",
            }}
            errorName={errors.email}
            disabled={isLoading}
            errors={errors}
          />
          <ValidInput
            id={"password"}
            type={"password"}
            label={"Password"}
            pText={"Enter Your Password"}
            register={register}
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            }}
            errorName={errors.password}
            disabled={isLoading}
            errors={errors}
          />
          <div className="flex text-sm lg:text-base justify-between items-center gap-3 cursor-pointer">
            <p className=" tracking-wide">Join With Us As : </p>
            <select
              id="role"
              {...register("role", { required: "Role is required" })}
              className={`
                                w-fit cursor-pointer h-[40px] px-5 outline-none focus:border-softBlue
                                ${
                                  errors && errors["role"]
                                    ? "focus:border-red-500 border-2"
                                    : ""
                                }
                            `}
              onChange={(e) => setUserRole(parseInt(e.target.value))}
              defaultValue={
                roles.find((r) => r.role === defaultValues.role)?.roleName
              }
            >
              <option disabled hidden value="">
                Select User Type
              </option>
              {roles.map((r) => (
                <option value={r.roleId}>{r.roleName}</option>
              ))}
            </select>
          </div>
          <div className="flex text-sm lg:text-base items-center gap-3 cursor-pointer">
            <input
              onChange={(e) => setAcceptTerms(e.target.checked)}
              type="checkbox"
              className="h-4 w-4 cursor-pointer rounded-full"
            />
            <p className="text-secondary">
              I accept HealthFROGS{" "}
              <span className="text-softBlue hover:underline">
                Terms & Conditions
              </span>
            </p>
          </div>
          <input
            type="submit"
            value="Sign Up"
            className={`w-full py-2 text-white uppercase font-poppins rounded-md ${
              acceptTerms ? "bg-softBlue cursor-pointer" : "bg-gray-400"
            }`}
          />
        </form>
        <div className=" lg:hidden text-sm ">
          <p>
            Already Have an Account ?
            <Link to={"/login"}>
              <span className="text-softBlue hover:underline">Login Now</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
