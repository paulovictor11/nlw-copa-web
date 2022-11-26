import cx from "classnames";
import { ReactNode } from "react";

type CardProps = {
    borderColor: "yellow" | "blue" | "green";
    children: ReactNode;
};

export function Card(props: CardProps) {
    return (
        <div
            className={cx("p-4 bg-gray-800 rounded-lg border-b-2", {
                "border-yellow-500": props.borderColor == "yellow",
                "border-blue-500": props.borderColor == "blue",
                "border-ignite-500": props.borderColor == "green",
            })}
        >
            {props.children}
        </div>
    );
}
