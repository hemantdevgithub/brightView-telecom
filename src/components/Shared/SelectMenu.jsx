import React from 'react';
import cn from '../../libs/cn';

const SelectMenu = ({
    id, label, pText, className, options, register, errors, errorName, defaultValue, disabled, validation
}) => {
    return (
        <div className='w-full space-y-1'>
            <p className='pl-1 text-sm'>
                {label}
            </p>
            <select
                id={id}
                {...register(id, validation)}
                disabled={disabled}
                defaultValue={defaultValue && defaultValue}
                className={cn(
                    `border px-4 h-[40px] w-full outline-none rounded-md border-softBlue cursor-pointer 
                    ${errors && errors[id] ? "focus:border-red-500 border-2" : ""}`,
                    className
                )}
            >
                <option disabled selected>
                    {pText}
                </option>
                {
                    options.map(option => (
                        <option
                            value={option.name || option.roleName}
                        >
                            {option.name || option.roleName}
                        </option>
                    ))
                }
            </select>
        </div>
    );
};

export default SelectMenu;