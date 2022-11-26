import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import toast, { Toaster } from "react-hot-toast";
import { CircleNotch, SignIn } from "phosphor-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { api } from "../../lib/axios";
import { useState } from "react";
import Head from "next/head";

interface iLoginForm {
    email: string;
    password: string;
}

export default function Login() {
    const router = useRouter();

    const { register, handleSubmit } = useForm<iLoginForm>();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = handleSubmit(async (data: iLoginForm) => {
        if (!data.email && !data.password) {
            toast.error("Por favor, preencha todos os campos!");
            return;
        }

        try {
            setIsLoading(true);
            await api.post("/login", data);
            router.replace("/painel/meus-boloes");
        } catch (err: any) {
            toast.error("Credenciais inválida!");
        } finally {
            setIsLoading(false);
        }
    });

    return (
        <div className="py-16 px-40 h-screen flex items-center justify-between">
            <Head>
                <title>Nlw Copa | Entrar</title>
            </Head>
            <Toaster />
            <Image
                src={logoImg}
                alt="Logo da NLW Copa"
                width={413}
                height={241}
            />

            <div className="bg-zinc-800 rounded-lg h-full w-[572px] px-10 py-14 flex flex-col items-center justify-between">
                <div>
                    <span className="flex items-center gap-3 font-semibold text-2xl text-white">
                        <SignIn size={20} weight="bold" />
                        Faça seu login
                    </span>

                    <span className="font-medium text-base text-white">
                        Entre com suas informações de cadastro.
                    </span>
                </div>

                <form onSubmit={handleLogin} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="email"
                            className="font-medium text-base text-white"
                        >
                            E-mail
                        </label>
                        <Input
                            label="email"
                            placeholder="Digite seu e-mail"
                            register={register}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="password"
                            className="font-medium text-base text-white"
                        >
                            Senha
                        </label>
                        <Input
                            label="password"
                            placeholder="Digite sua senha"
                            type="password"
                            register={register}
                        />
                    </div>

                    <Button color="yellow" type="submit">
                        {isLoading ? (
                            <CircleNotch size={20} className="animate-spin" />
                        ) : (
                            <span>Entrar</span>
                        )}
                    </Button>
                </form>

                <span className="font-medium text-base text-white">
                    Ainda não possui uma conta?{" "}
                    <Link
                        href="/cadastro"
                        className="text-yellow-500 hover:underline hover:underline-offset-2"
                    >
                        Cadastre-se!
                    </Link>
                </span>
            </div>
        </div>
    );
}
