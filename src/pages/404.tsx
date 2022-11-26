import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logoImg from "../assets/logo.svg";
import { Button } from "../components/Button";

export default function Custom404() {
    return (
        <>
            <Head>
                <title>Nlw Copa | Bolão não encontrado</title>
            </Head>
            <div className="py-16 px-40 h-screen flex flex-col items-center justify-start">
                <Image src={logoImg} alt="Logo da NLW Copa" />

                <span className="mt-20 font-bold text-8xl text-yellow-500">
                    404
                </span>
                <span className="font-semibold text-xl text-white">
                    O bolão que você procura não foi encontrado!
                </span>

                <div className="mt-10">
                    <Link href="/painel/meus-boloes" replace>
                        <Button color="yellow">
                            Voltar para a página inicial
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
}
