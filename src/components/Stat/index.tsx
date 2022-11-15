import Image from "next/image";

type StatProps = {
    label: string;
    content: string;
    image: string;
};

export function Stat({ label, content, image }: StatProps) {
    return (
        <div className="flex items-center gap-6">
            <Image
                src={image}
                alt="Ícone que representa uma marcação com fundo redondo na cor verde"
            />
            <div className="flex flex-col">
                <span className="font-bold text-2xl">{label}</span>
                <span>{content}</span>
            </div>
        </div>
    );
}
