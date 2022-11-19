import { Card } from "../Card";

type RankingCardProps = {
    name: string;
    spots: string;
    position: string;
    isTopLeader?: boolean;
};

export function RankingCard({
    name,
    spots,
    position,
    isTopLeader = false,
}: RankingCardProps) {
    return (
        <Card borderColor="yellow">
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start gap-3">
                    <div className="h-10 w-10 bg-zinc-500 rounded-full" />
                    <div className="flex flex-col">
                        <span className="max-w-[260px] font-bold text-base text-white truncate">
                            {name}
                        </span>
                        <span className="font-normal text-xs text-gray-200">
                            {spots} ponto(s)
                        </span>
                    </div>
                </div>

                <div
                    className={`h-7 w-10 rounded-full flex items-center justify-center ${
                        isTopLeader ? "bg-yellow-500" : "bg-gray-600"
                    }`}
                >
                    <span
                        className={`font-bold text-center text-base ${
                            isTopLeader ? "text-black" : "text-gray-300"
                        }`}
                    >
                        {position}
                    </span>
                </div>
            </div>
        </Card>
    );
}
