import Image from "next/image";
import usersAvatarImg from "../../../assets/users-avatar.png";
import { useRouter } from "next/router";
import { Common } from "../../../components/Common";
import { Tabs } from "../../../components/Tabs";
import { GameList } from "../../../features/GameList";
import { RankingList } from "../../../features/RankingList";
import { Divider } from "../../../components/Divider";

export default function PoolDetail() {
    const router = useRouter();
    const code = router.query.code as string;

    return (
        <Common>
            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-base text-white">
                        Bolão do Rodrigão
                    </span>
                    <span className="font-normal text-xs text-gray-200">
                        Código: <span className="font-bold">{code}</span>
                    </span>
                </div>

                <Image
                    src={usersAvatarImg}
                    alt="Grupo de avatares com fotos de pessoas"
                />
            </div>

            <Divider />

            {/* <p className="text-gray-200 text-center mb-5">
                Esse bolão ainda não tem participantes, que tal{" "}
                <span className="text-yellow-500 underline underline-offset-2">
                    compartilhar o código
                </span>{" "}
                do bolão com alguém? Use o código{" "}
                <span className="font-bold">JP3640</span>
            </p> */}

            <Tabs.Root defaultValue="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="tab1" label="Seus palpites" />
                    <Tabs.Trigger value="tab2" label="Ranking do grupo" />
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <GameList />
                </Tabs.Content>
                <Tabs.Content value="tab2">
                    <RankingList />
                </Tabs.Content>
            </Tabs.Root>
        </Common>
    );
}
