import cx from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    color: "green" | "red" | "yellow";
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
            className={cx(
                "px-6 py-4 rounded font-bold uppercase text-sm transition-colors flex items-center justify-center gap-[10px]",
                {
                    "w-full": full,
                    "text-white bg-green-500 hover:bg-green-600":
                        color == "green",
                    "text-white bg-red-500 hover:bg-red-600": color == "red",
                    "text-black bg-yellow-500 hover:bg-yellow-400":
                        color == "yellow",
                }
            )}
        >
            {children}
        </button>
    );
}
