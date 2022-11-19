import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: "ignite" | "red" | "yellow";
    children: ReactNode;
    full?: boolean;
};

export function Button({
    color,
    children,
    full = false,
    ...rest
}: ButtonProps) {
    return (
        <button
            {...rest}
            className={`${full ? "w-full" : ""} ${
                color === "yellow" ? "text-black" : "text-white"
            } bg-${color}-500 px-6 py-4 rounded font-bold uppercase text-sm hover:bg-${color}-600 transition-colors flex items-center justify-center gap-[10px] group`}
        >
            {children}
        </button>
    );
}
