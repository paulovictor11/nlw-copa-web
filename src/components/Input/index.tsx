import cx from "classnames";
import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    full?: boolean;
    register: UseFormRegister<any>;
    required?: boolean;
    label: string;
};

export function Input({
    label,
    register,
    full = false,
    required = false,
    ...rest
}: InputProps) {
    return (
        <input
            {...register(label, { required })}
            {...rest}
            id={label}
            name={label}
            className={cx(
                "w-[335px] px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100",
                {
                    "w-full": full,
                }
            )}
        />
    );
}
