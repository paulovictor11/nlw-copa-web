import cx from "classnames";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { Card } from "../Card";

type CardGameRootProps = {
    children: ReactNode;
};

function CardGameRoot(props: CardGameRootProps) {
    return <Card borderColor="yellow">{props.children}</Card>;
}

CardGameRoot.displayName = "CardGame.Root";

type CardGameHeaderProps = {
    title: string;
    subtitle: string;
};

function CardGameHeader(props: CardGameHeaderProps) {
    return (
        <div className="flex flex-col items-center">
            <span className="font-bold text-sm text-gray-100">
                {props.title}
            </span>
            <span className="font-normal text-xs text-gray-200">
                {props.subtitle}
            </span>
        </div>
    );
}

CardGameHeader.displayName = "CardGame.Header";

type CardGameContentProps = {
    children: ReactNode;
};

function CardGameContent(props: CardGameContentProps) {
    return (
        <div className="mt-4 flex items-center justify-between">
            {props.children}
        </div>
    );
}

CardGameContent.displayName = "CardGame.Content";

type CardGameInputProps = {
    flag?: string;
};

function CardGameInput(props: CardGameInputProps) {
    return (
        <div className="flex items-center justify-center gap-3">
            <input
                type="text"
                placeholder="0"
                className="w-10 h-9 px-3 rounded bg-gray-900 border border-gray-600 text-sm text-gray-100 placeholder:text-gray-200"
            />

            <div className="bg-zinc-500 w-8 h-6" />
        </div>
    );
}

CardGameInput.displayName = "CardGame.Input";

type CardGameActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    label: string;
    isExpired?: boolean;
};

function CardGameAction({
    label,
    isExpired = false,
    ...rest
}: CardGameActionProps) {
    return (
        <button
            {...rest}
            className={cx(
                "w-full h-8 mt-4 rounded uppercase text-xs font-bold",
                {
                    "bg-gray-600 text-gray-300 hover:cursor-not-allowed":
                        isExpired,
                    "bg-green-500 text-white hover:cursor-pointer hover:bg-green-600":
                        !isExpired,
                }
            )}
        >
            {isExpired ? "Tempo Esgotado" : label}
        </button>
    );
}

CardGameAction.displayName = "CardGame.Action";

export const GameCard = {
    Root: CardGameRoot,
    Header: CardGameHeader,
    Content: CardGameContent,
    Input: CardGameInput,
    Action: CardGameAction,
};
