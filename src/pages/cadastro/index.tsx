import Image from "next/image";
import Link from "next/link";
import logoImg from "../../assets/logo.svg";
import toast, { Toaster } from "react-hot-toast";
import { CircleNotch, SignIn } from "phosphor-react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { api } from "../../lib/axios";
import Head from "next/head";

interface iRegisterForm {
    name: string;
    email: string;
    password: string;
}

export default function Register() {
    const router = useRouter();

    const { register, handleSubmit } = useForm<iRegisterForm>();
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = handleSubmit(async (data: iRegisterForm) => {
        if (!data.name && !data.email && !data.password) {
            toast.error("Por favor, preencha todos os campos!");
            return;
        }

        try {
            setIsLoading(true);
            await api.post("/users", data);
            router.replace("/painel/meus-boloes");
        } catch (err: any) {
            toast.error("Usuário já cadastrado");
        } finally {
            setIsLoading(false);
        }
    });

    return (
        <div className="py-16 px-40 h-screen flex items-center justify-between">
            <Head>
                <title>Nlw Copa | Cadastrar</title>
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
                        Faça seu cadastro
                    </span>

                    <span className="font-medium text-base text-white">
                        Preencha os campos com suas informações.
                    </span>
                </div>

                <form onSubmit={handleRegister} className="flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <label
                            htmlFor="name"
                            className="font-medium text-base text-white"
                        >
                            Nome Completo
                        </label>
                        <Input
                            label="name"
                            placeholder="Digite seu nome"
                            register={register}
                        />
                    </div>

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
                            type="email"
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
                            register={register}
                            type="password"
                        />
                    </div>

                    <Button color="yellow" type="submit">
                        {isLoading ? (
                            <CircleNotch size={20} className="animate-spin" />
                        ) : (
                            <span>Cadastrar</span>
                        )}
                    </Button>
                </form>

                <span className="font-medium text-base text-white">
                    Já possui uma conta?{" "}
                    <Link
                        href="/login"
                        className="text-yellow-500 hover:underline hover:underline-offset-2"
                    >
                        Entrar!
                    </Link>
                </span>
            </div>
        </div>
    );
}
