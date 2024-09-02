import React, { useState } from 'react';
import cn from '../../libs/cn';
import { BsCloudUpload, BsUpload } from "react-icons/bs";
import { FaUserLarge } from "react-icons/fa6";
import { MdDelete } from 'react-icons/md';
const ImageUpload = ({ className, userImage, handleUploadImage, role }) => {
    const [image, setImage] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const handleUpload = () => {
        handleUploadImage(imageFile[0])
    }
    return (
        <div className='w-full h-full'>
            <div
                onClick={() => document.querySelector(".file-input").click()}
                className={cn("relative w-[100px] h-[100px] group cursor-pointer", className)}>
                <input
                    type="file"
                    className='file-input'
                    accept='image/*'
                    hidden
                    onChange={({ target: { files } }) => {
                        if (files) {
                            setImage(URL.createObjectURL(files[0]))
                            setImageFile(files)
                        }
                    }}
                />
                {image || userImage ? (
                    <img
                        src={image ? image : userImage}
                        className={`absolute h-full w-full rounded-full ${role === 7483 ? "rounded-full" : "rounded-md"}`}
                        alt=""
                    />
                ) : (
                    <FaUserLarge
                        className={`text-gray-300 border-2 absolute h-full w-full ${role === 7483 ? "rounded-full" : "rounded-md"}`}
                    />
                )}
                <div className={`absolute invisible opacity-0 group-hover:opacity-100 duration-300 group-hover:visible backdrop-blur-sm text-xs h-full w-full ${role === 7483 ? "rounded-full" : "rounded-md"}`}>
                    <div className='flex flex-col h-full items-center justify-center text-black text-center'>
                        <BsCloudUpload className='text-lg' />
                        <h1 className='bg-white px-3'>
                            Upload New Photo
                        </h1>
                    </div>
                </div>

            </div>
            {
                image && (
                    <div className='flex justify-between'>
                        <button
                            onClick={() => setImage(null)}
                            className='flex text-xs items-center gap-3 bg-red-500 text-white px-3 rounded-md'>
                            Delete
                            <MdDelete className='text-base  cursor-pointer' />
                        </button>
                        <button
                            onClick={() => handleUpload()}
                            className='flex text-xs items-center gap-3 bg-softBlue text-white px-4 py-2 rounded-md'>
                            Upload
                            <BsUpload className='text-base  cursor-pointer' />
                        </button>
                    </div>
                )
            }
        </div>
    );
};

export default ImageUpload;