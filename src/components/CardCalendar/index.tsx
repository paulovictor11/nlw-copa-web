import { ReactNode } from "react";
import { Card } from "../Card";

type CardCalendarRootProps = {
    children: ReactNode;
};

function CardCalendarRoot(props: CardCalendarRootProps) {
    return (
        <Card borderColor="blue">
            <div className="pt-4 px-2">{props.children}</div>
        </Card>
    );
}

CardCalendarRoot.displayName = "CardCalendar.Root";

type CardCalendarHeaderProps = {
    date: string;
    day: string;
};

function CardCalendarHeader(props: CardCalendarHeaderProps) {
    return (
        <div className="flex justify-center uppercase">
            <div className="px-4 py-2 flex items-center gap-4 border border-blue-500 rounded-lg">
                <span className="font-bold text-yellow-500 text-2xl">
                    {props.date}
                </span>
                <span className="font-bold text-gray-100 text-sm">
                    {props.day}
                </span>
            </div>
        </div>
    );
}

CardCalendarHeader.displayName = "CardCalendar.Header";

type CardCalendarContentProps = {
    children: ReactNode;
};

function CardCalendarContent(props: CardCalendarContentProps) {
    return (
        <div className="mt-8 grid grid-cols-1 divide-y divide-white/30">
            {props.children}
        </div>
    );
}

CardCalendarContent.displayName = "CardCalendar.Content";

type CardCalendarTileProps = {
    time: string;
};

function CardCalendarTile(props: CardCalendarTileProps) {
    return (
        <div className="py-6 flex items-center justify-between">
            <div className="h-[50px] w-[50px] bg-zinc-500 rounded-full" />
            <span className="font-black text-gray-100 text-4xl">
                {props.time}
            </span>
            <div className="h-[50px] w-[50px] bg-zinc-500 rounded-full" />
        </div>
    );
}

CardCalendarTile.displayName = "CardCalendar.Tile";

export const CardCalendar = {
    Root: CardCalendarRoot,
    Header: CardCalendarHeader,
    Content: CardCalendarContent,
    Tile: CardCalendarTile,
};
