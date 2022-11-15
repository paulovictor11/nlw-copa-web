import Image from "next/image";
import Link from "next/link";
import usersAvatarImg from "../../assets/users-avatar.png";
import { Card } from "../Card";

type CardPoolProps = {
    title: string;
    content: string;
    path: string;
};

export function CardPool(props: CardPoolProps) {
    return (
        <Link href={props.path}>
            <Card>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="font-bold text-base text-white">
                            {props.title}
                        </span>
                        <span className="font-normal text-xs text-gray-200">
                            {props.content}
                        </span>
                    </div>

                    <Image
                        src={usersAvatarImg}
                        alt="Grupo de avatares com fotos de pessoas"
                    />
                </div>
            </Card>
        </Link>
    );
}
