import * as Dialog from "@radix-ui/react-dialog";
import { CircleNotch } from "phosphor-react";
import { FormEvent, useState } from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../lib/axios";

export function PoolForm() {
    const [poolTitle, setPoolTitle] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    async function createPool(event: FormEvent) {
        event.preventDefault();

        setIsLoading(true);

        try {
            const response = await api.post("/pools", {
                title: poolTitle,
            });

            const { code } = response.data;

            await navigator.clipboard.writeText(code);

            alert(
                "Bolão criado com sucesso, o código foi copiado para a área de transferência!"
            );

            setPoolTitle("");
            setIsLoading(false);
        } catch (err: any) {
            console.log(err);
            alert("Falha ao criar o bolão, tente novamente!");
        }
    }

    return (
        <Dialog.Portal>
            <Dialog.Overlay className="bg-black/60 inset-0 fixed" />

            <Dialog.Content className="fixed bg-gray-800 py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25">
                <Dialog.Title className="text-2xl font-bold text-center">
                    Crie seu próprio bolão da copa e compartilhe entre amigos
                </Dialog.Title>

                <form
                    onSubmit={createPool}
                    className="mt-8 flex flex-col gap-4"
                >
                    <Input
                        placeholder="Qual o nome do seu bolão?"
                        type="text"
                        required
                        full
                        onChange={(event) => setPoolTitle(event.target.value)}
                        value={poolTitle}
                    />

                    <Button type="submit" color="yellow">
                        {isLoading ? (
                            <CircleNotch size={20} className="animate-spin" />
                        ) : (
                            <span>Criar meu bolão</span>
                        )}
                    </Button>

                    <span className="text-gray-200 text-sm text-center mt-4">
                        Após criar seu bolão, você receberá um código único que
                        poderá usar para convidar outras pessoas.
                    </span>
                </form>
            </Dialog.Content>
        </Dialog.Portal>
    );
}
