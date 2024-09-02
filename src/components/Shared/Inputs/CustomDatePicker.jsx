import React, { useState } from 'react';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import cn from '../../../libs/cn';
import { Controller } from 'react-hook-form';
import moment from 'moment';
const CustomDatePicker = ({
    id,
    label,
    pText,
    fieldName,
    setValue,
    className,
    defaultValue,
    disabled,
    control,
    containerClassName }
) => {
    const [startDate, setStartDate] = useState(defaultValue || new Date());
    return (
        <div className={cn("w-full space-y-1", containerClassName)}>
            <p className='pl-1 text-sm'>
                {label}
            </p>
            <Controller
                control={control}
                name={fieldName} // Use the passed fieldName prop
                render={({ field: { onChange, onBlur, value } }) => (
                    <ReactDatePicker
                        id={id}
                        onChange={(date) => {
                            const formattedDate = date.toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                            });
                            setValue(fieldName, formattedDate, { shouldValidate: true });
                            onChange(formattedDate);
                        }}
                        onBlur={onBlur}
                        selected={value}
                        placeholderText={pText}
                        disabled={disabled}
                        wrapperClassName='w-full'
                        className={cn("border bg-gray-white px-4 h-[40px] text-sm min-w-full outline-none focus:border-softBlue", className)}
                        dateFormat="yyyy/MM/dd"
                        isClearable
                    />
                )}
            />
        </div>
    );
};

export default CustomDatePicker;