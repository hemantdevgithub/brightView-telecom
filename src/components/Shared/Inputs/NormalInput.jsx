import React from 'react';
import cn from '../../../libs/cn';

const NormalInput = ({
    id,
    label,
    type,
    pText,
    className,
    containerClassName
}) => {
    return (
        <div className={cn("w-full space-y-1", containerClassName)}>
            <p className='pl-1 text-sm'>
                {label}
            </p>
            <input
                id={id}
                placeholder={pText}
                type={type || "text"}
                className={cn(
                    `border bg-gray-white px-4 h-[40px] text-sm w-full outline-none focus:border-softBlue`,
                    className
                )}
            />
        </div>
    );
};

export default NormalInput;