import toast from "react-hot-toast"
import cn from "../../../libs/cn"

const ValidInput = ({
    id,
    label,
    type,
    pText,
    disabled,
    register,
    errors,
    validation,
    errorName,
    className,
    defaultValue,
    value,
    containerClassName,
    fieldName
}) => {
    return (
        <div className={cn("w-full space-y-1", containerClassName)}>
            <p className='pl-1 text-sm'>
                {label}
            </p>
            <input
                id={id}
                disabled={disabled}
                defaultValue={defaultValue}
                {...register(fieldName ? fieldName : id, validation)}
                value={value && value}
                placeholder={pText}
                type={type || "text"}
                className={cn(
                    `border bg-gray-white px-4 h-[40px] text-sm w-full outline-none focus:border-softBlue
                    ${errors && errors[id] ? "focus:border-red-500 border-2" : ""}`,
                    className
                )}
            />
            {
                errorName && (
                    <span className="text-xs font-light ml-2">{errorName?.message}</span>
                )
            }
        </div>
    )
}

export default ValidInput
