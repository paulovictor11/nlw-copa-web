import { Button } from "../../../components/Button";
import { PoolCard } from "../../../components/PoolCard";
import { Common } from "../../../components/Common";
import { Input } from "../../../components/Input";
import { Divider } from "../../../components/Divider";
import { api } from "../../../lib/axios";

interface iUser {
    id: string;
    name: string;
}
interface iPool {
    id: string;
    title: string;
    code: string;
    owner?: iUser;
}

type MyPoolsProps = {
    pools: iPool[];
};

export default function MyPools(props: MyPoolsProps) {
    function mountPoolCard(pool: iPool) {
        return (
            <PoolCard
                key={pool.id}
                title={pool.title}
                content={`Criado por ${pool.owner?.name ?? ""}`}
                path={`/dashboard/meus-boloes/${pool.code}`}
            />
        );
    }

    return (
        <Common>
            <div className="flex items-center justify-end gap-4">
                <Input placeholder="Qual o código do bolão?" />
                <Button color="yellow">Buscar Bolão</Button>
            </div>

            <Divider />

            {!props.pools.length ? (
                <p className="text-gray-200 text-center">
                    Você ainda não está participando de nenhum bolão, que tal{" "}
                    <span className="text-yellow-500 underline underline-offset-2">
                        buscar um por código
                    </span>{" "}
                    ou{" "}
                    <span className="text-yellow-500 underline underline-offset-2">
                        criar um novo
                    </span>
                    ?
                </p>
            ) : null}

            <div className="grid grid-cols-3 gap-x-4 gap-y-6 mt-5">
                {!!props.pools.length ? props.pools.map(mountPoolCard) : null}
            </div>
        </Common>
    );
}

export const getServerSideProps = async () => {
    const { data } = await api.get<{ pools: iPool[] }>("/pools");

    return {
        props: {
            pools: data.pools,
        },
    };
};
