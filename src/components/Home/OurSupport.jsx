import React from 'react';
import Container from '../Container/Container';

const OurSupport = () => {
    return (
        <div className='bg-[#f5f5f8] py-10 font-syne'>
            <Container>
                <div className='flex flex-col lg:flex-row gap-10 w-[80%] mx-auto'>
                    <div className='w-full lg:w-[50%]'>
                        <img src="/Home/man.png" alt="" />
                    </div>
                    <div className='w-full lg:w-[50%] flex flex-col justify-center gap-10'>
                        <h3 className='text-xl lg:text-3xl font-syne font-semibold text-primary flex gap-2'>
                            Get
                            <span className='text-[#1b2651] font-semibold'>
                                Health
                                <span className='text-[#cd2028] font-semibold'>
                                    FROGS
                                </span>
                            </span>
                            Support
                        </h3>
                        <form className='space-y-5'>
                            <InputField
                                label={"Full Name"}
                                type={"text"}
                                pText={"Enter Your Full Name"}
                                name={"name"}
                            />
                            <InputField
                                label={"Email"}
                                type={"email"}
                                pText={"Enter Your Email Address"}
                                name={"email"}
                            />
                            <InputField
                                label={"Phone Number"}
                                type={"phone"}
                                pText={"Enter Your Phone Number"}
                                name={"phone"}
                            />
                            <input
                                type="submit"
                                value="Submit"
                                className='bg-primary text-white px-7 py-2 font-semibold hover:bg-opacity-70 duration-300 cursor-pointer'
                            />
                        </form>
                    </div>
                </div>
            </Container>
        </div>
    );
}

const InputField = ({ label, type, pText, name }) => {
    return (
        <div className='space-y-3'>
            <label>{label}*</label>
            <input
                type={type}
                name={name}
                className='h-[40px] w-full bg-white px-5 border border-gray-400 outline-none focus:border-primary text-sm'
                placeholder={pText}
            />
        </div>
    )
}

export default OurSupport;