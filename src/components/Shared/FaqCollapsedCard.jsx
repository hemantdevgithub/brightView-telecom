import React, { useState } from 'react';
import { TfiArrowCircleDown, TfiArrowCircleUp } from 'react-icons/tfi';

const FaqCollapsedCard = ({ data }) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className='transition my-3 w-full cursor-pointer'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="p-5 border rounded-xl"
            >
                <div className='flex text-lg lg:text-2xl items-center justify-between w-full'>
                    <h3 className=' font-syne text-primary'>{data.question}</h3>
                    <p className=''>
                        {!isOpen ? <TfiArrowCircleDown /> : <TfiArrowCircleUp />}
                    </p>
                </div>

            </div>
            {
                isOpen &&
                <div className='bg-gray-100 mt-1 rounded-xl p-5'>
                    <p>{data.answer}</p>
                </div>
            }
        </div>
    );
};

export default FaqCollapsedCard;