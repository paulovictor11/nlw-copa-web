import { Button } from "../../../components/Button";
import { PoolCard } from "../../../components/PoolCard";
import { Common } from "../../../components/Common";
import { Input } from "../../../components/Input";
import { Divider } from "../../../components/Divider";

export default function MyPools() {
    return (
        <Common>
            <div className="flex items-center justify-end gap-4">
                <Input placeholder="Qual o código do bolão?" />
                <Button color="yellow">Buscar Bolão</Button>
            </div>

            <Divider />

            {/* <p className="text-gray-200 text-center">
                Você ainda não está participando de nenhum bolão, que tal{" "}
                <span className="text-yellow-500 underline underline-offset-2">
                    buscar um por código
                </span>{" "}
                ou{" "}
                <span className="text-yellow-500 underline underline-offset-2">
                    criar um novo
                </span>
                ?
            </p> */}

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
                <PoolCard
                    title="Bolão do Rodrigão"
                    content="Criado por Rodrigo G."
                    path="/dashboard/meus-boloes/JP3640"
                />
                <PoolCard
                    title="Bolão do Firma"
                    content="Criado por Diego F."
                    path="/dashboard/meus-boloes/JP3640"
                />
                <PoolCard
                    title="Família & Amigos"
                    content="Criado por Joseph O."
                    path="/dashboard/meus-boloes/JP3640"
                />
                <PoolCard
                    title="Um bolão recém criado"
                    content="Criado por Diego F."
                    path="/dashboard/meus-boloes/JP3640"
                />
            </div>
        </Common>
    );
}
