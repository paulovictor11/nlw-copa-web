import { ReactNode } from "react";

type CardProps = {
    children: ReactNode;
};

export function Card(props: CardProps) {
    return (
        <div className="w-full p-4 bg-gray-800 rounded-lg border-b-2 border-yellow-500">
            {props.children}
        </div>
    );
}
