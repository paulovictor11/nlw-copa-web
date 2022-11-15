import { Button } from "../../components/Button";
import { CardPool } from "../../components/CardPool";
import { Common } from "../../components/Common";
import { Input } from "../../components/Input";

export default function MyPools() {
    return (
        <Common>
            <div className="flex items-center justify-end gap-4">
                <Input placeholder="Qual o código do bolão?" />
                <Button color="yellow">Buscar Bolão</Button>
            </div>

            <div className="h-px bg-white/30 my-5 rounded-full" />

            <p className="text-gray-200 text-center">
                Você ainda não está participando de nenhum bolão, que tal{" "}
                <span className="text-yellow-500">buscar um por código</span> ou{" "}
                <span className="text-yellow-500">criar um novo</span>?
            </p>

            {/* <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                    <CardPool
                        title="Bolão do Rodrigão"
                        content="Criado por Rodrigo G."
                        path="/dashboard/meus-boloes/1"
                    />
                    <CardPool
                        title="Bolão do Rodrigão"
                        content="Criado por Rodrigo G."
                        path="/dashboard/meus-boloes/1"
                    />
                    <CardPool
                        title="Bolão do Rodrigão"
                        content="Criado por Rodrigo G."
                        path="/dashboard/meus-boloes/1"
                    />
                </div> */}
        </Common>
    );
}
