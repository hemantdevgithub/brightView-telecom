import React, { useState } from 'react';
import cn from '../../libs/cn';
import { MdCloudUpload, MdDelete } from "react-icons/md"
import { AiFillFileImage } from "react-icons/ai"
const FileUpload = ({ className, bottomContainerClass }) => {
    const [image, setImage] = useState(null);
    const [fileName, setFileName] = useState("No Selected File");
    return (
        <div className='space-y-2 w-full'>
            <div className={cn("w-full h-[250px] border-2 border-softBlue border-dashed rounded-md flex flex-col items-center justify-center p-5 cursor-pointer", className)}
                onClick={() => document.querySelector(".file-input-upload").click()}
            >
                <input
                    type="file"
                    accept='image/*'
                    className='file-input-upload'
                    hidden
                    onChange={({ target: { files } }) => {
                        files[0] && setFileName(files[0].name)
                        if (files) {
                            setImage(URL.createObjectURL(files[0]));
                        }
                    }}
                />
                {
                    image ?
                        <img src={image} className='w-full h-full rounded-[10px]' alt="" />
                        : <>
                            <MdCloudUpload size={80} className='text-softBlue' />
                            <p className='text-xs'>Browse Files To Upload</p>
                        </>
                }

            </div>
            <div className={cn('flex justify-between items-center bg-[#e9f0ff] border-2  rounded-md py-3 px-4 text-2xl', bottomContainerClass)} >
                <AiFillFileImage className='text-softBlue' />
                <p className='text-sm'>{fileName}</p>
                <MdDelete
                    className='text-softBlue  cursor-pointer'
                    onClick={() => {
                        setFileName("No Selected File")
                        setImage(null)
                    }}
                />
            </div>
        </div>
    );
};

export default FileUpload;