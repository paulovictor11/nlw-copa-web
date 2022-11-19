import { X } from "phosphor-react";
import { GameCard } from "../../components/GameCard";

export function GameList() {
    return (
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
            <GameCard.Root>
                <GameCard.Header
                    title="Brasil vs Argentina"
                    subtitle="22 de Novembro de 2022 às 16:00h"
                />
                <GameCard.Content>
                    <GameCard.Input />
                    <X size={24} className="text-gray-300" />
                    <GameCard.Input />
                </GameCard.Content>
            </GameCard.Root>

            <GameCard.Root>
                <GameCard.Header
                    title="Alemanha vs Bélgica"
                    subtitle="22 de Novembro de 2022 às 19:00h"
                />
                <GameCard.Content>
                    <GameCard.Input />
                    <X size={24} className="text-gray-300" />
                    <GameCard.Input />
                </GameCard.Content>

                <GameCard.Action label="Confirmar Palpite" />
            </GameCard.Root>

            <GameCard.Root>
                <GameCard.Header
                    title="Japão vs Uruguai"
                    subtitle="20 de Novembro de 2022 às 16:00h"
                />
                <GameCard.Content>
                    <GameCard.Input />
                    <X size={24} className="text-gray-300" />
                    <GameCard.Input />
                </GameCard.Content>

                <GameCard.Action label="Confirmar Palpite" isExpired />
            </GameCard.Root>
        </div>
    );
}
