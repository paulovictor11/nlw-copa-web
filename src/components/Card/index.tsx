import { ReactNode } from "react";

type CardProps = {
    borderColor: "yellow" | "blue" | "green";
    children: ReactNode;
};

export function Card(props: CardProps) {
    return (
        <div
            className={`p-4 bg-gray-800 rounded-lg border-b-2 border-${props.borderColor}-500`}
        >
            {props.children}
        </div>
    );
}
