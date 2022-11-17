import Image from "next/image";
import usersAvatarImg from "../../../assets/users-avatar.png";
import { useRouter } from "next/router";
import { Common } from "../../../components/Common";

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
                        Código: <span className="font-bold">JP3640</span>
                    </span>
                </div>

                <Image
                    src={usersAvatarImg}
                    alt="Grupo de avatares com fotos de pessoas"
                />
            </div>

            <div className="h-px bg-white/30 my-5 rounded-full" />

            <p className="text-gray-200 text-center">
                Esse bolão ainda não tem participantes, que tal{" "}
                <span className="text-yellow-500">compartilhar o código</span>{" "}
                do bolão com alguém? Use o código{" "}
                <span className="font-bold">JP3640</span>
            </p>
        </Common>
    );
}
