import { RankingCard } from "../../components/RankingCard";

export function RankingList() {
    return (
        <>
            {/* <p className="text-gray-200 text-center mt-5">
                O ranking desse bolão ainda não foi formado, aguarde os
                resultados.
            </p> */}

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
                <RankingCard
                    name="Rodrigo Gonçalves"
                    spots="36"
                    position="1º"
                    isTopLeader
                />
                <RankingCard
                    name="Karen McGlynn"
                    spots="36"
                    position="2º"
                    isTopLeader
                />
                <RankingCard
                    name="Janet Walsh"
                    spots="36"
                    position="3º"
                    isTopLeader
                />
                <RankingCard name="Dewey Zboncak" spots="36" position="4º" />
                <RankingCard name="Enrique Spencer" spots="36" position="5º" />
            </div>
        </>
    );
}
