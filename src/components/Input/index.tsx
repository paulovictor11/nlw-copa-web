import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    full?: boolean;
};

export function Input({ full = false, ...rest }: InputProps) {
    return (
        <input
            className={`${
                full ? "w-full" : "w-[335px]"
            } px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100`}
            {...rest}
        />
    );
}
