import React from 'react';
import cn from '../../libs/cn';

const ValidTextarea = ({
    id,
    label,
    pText,
    disabled,
    register,
    validation,
    errorName,
    className,
    defaultValue,
    containerClassName
}) => {
    return (
        <div className={cn("w-full space-y-1", containerClassName)}>
            <p className='pl-1'>
                {label}
            </p>
            <textarea
                id={id}
                disabled={disabled}
                defaultValue={defaultValue}
                {...register(id, validation)}
                placeholder={pText}
                className={cn(
                    `bg-gray-white p-4 h-[150px] w-full outline-none border border-softBlue rounded-md`,
                    className
                )}
            />
            {
                errorName && (
                    <span className="text-xs font-light ml-2">{errorName?.message}</span>
                )
            }
        </div>
    );
};

export default ValidTextarea;