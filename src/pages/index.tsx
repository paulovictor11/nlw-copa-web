import Image from "next/image";
import Link from "next/link";
import appPreviewImg from "../assets/app-nlw-copa-preview.png";
import logoImg from "../assets/logo.svg";
import usersAvatarImg from "../assets/users-avatar.png";
import iconCheckImg from "../assets/icon-check.svg";
import { api } from "../lib/axios";
import { GoogleLogo } from "phosphor-react";
import { Button } from "../components/Button";
import { Stat } from "../components/Stat";

interface HomeProps {
    poolCount: number;
    guessCount: number;
    userCount: number;
}

export default function Home(props: HomeProps) {
    return (
        <div className="bg-app bg-no-repeat bg-cover">
            <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
                <main>
                    <Image src={logoImg} alt="Logo da NLW Copa" />

                    <h1 className="mt-[60px] text-white text-5xl font-bold leading-tight">
                        Crie seu próprio bolão da copa e compartilhe entre
                        amigos!
                    </h1>

                    <div className="mt-10 flex items-center gap-2 mb-10">
                        <Image
                            src={usersAvatarImg}
                            alt="Grupo de avatares com fotos de pessoas"
                        />

                        <strong className="text-gray-100 text-xl">
                            <span className="text-ignite-500">
                                +{props.userCount}
                            </span>{" "}
                            pessoas já estão usando
                        </strong>
                    </div>

                    {/* <form onSubmit={createPool} className="mt-10 flex gap-2">
                        <input
                            className="flex-1 px-6 py-4 rounded bg-gray-800 border border-gray-600 text-sm text-gray-100"
                            type="text"
                            required
                            placeholder="Qual nome do seu bolão?"
                            onChange={(event) => setPoolTitle(event.target.value)}
                            value={poolTitle}
                        />
                        <button
                            className="bg-yellow-500 px-6 py-4 rounded font-bold uppercase text-gray-900 text-sm hover:bg-yellow-700 transition-colors"
                            type="submit"
                        >
                            Criar meu bolão
                        </button>
                    </form> */}

                    {/* <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                        Após criar seu bolão, você receberá um código único que
                        poderá usar para convidar outras pessoas 🚀
                    </p> */}

                    <Link href="/dashboard/meus-boloes">
                        <Button color="red" full>
                            <GoogleLogo size={20} weight="bold" />
                            Entrar com google
                        </Button>
                    </Link>

                    <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                        Não utilizamos nenhuma informação além do seu e-mail
                        para criação de sua conta.
                    </p>

                    <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
                        <Stat
                            image={iconCheckImg}
                            label={`+${props.poolCount}`}
                            content="Bolões criados"
                        />

                        <div className="w-px h-14 bg-gray-600" />

                        <Stat
                            image={iconCheckImg}
                            label={`+${props.guessCount}`}
                            content="Palpites enviados"
                        />
                    </div>
                </main>

                <Image
                    src={appPreviewImg}
                    alt="Dois celulares exibinda uma prévia da aplicação móvel do NLW Copa"
                />
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const [poolCountResponse, guessCountResponse, userCountResponse] =
        await Promise.all([
            api.get("/pools/count"),
            api.get("/guesses/count"),
            api.get("/users/count"),
        ]);

    return {
        props: {
            poolCount: poolCountResponse.data.count,
            guessCount: guessCountResponse.data.count,
            userCount: userCountResponse.data.count,
        },
    };
};
