import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { ReactNode } from "react";
import { Bell, CalendarBlank, SignOut, SoccerBall } from "phosphor-react";
import { useRouter } from "next/router";
import Link from "next/link";

type NavLinkProps = {
    label: string;
    icon: ReactNode;
    link: string;
};

export function Navbar() {
    const router = useRouter();

    function NavLink({ label, icon, link }: NavLinkProps) {
        return (
            <Link href={link}>
                <div
                    className={`h-[72px] flex flex-col items-center justify-center group hover:cursor-pointer ${
                        router.pathname === link
                            ? "border-b-2 border-yellow-500"
                            : ""
                    }`}
                >
                    <div
                        className={`flex items-center justify-center gap-2 group-hover:text-yellow-500 ${
                            router.pathname === link
                                ? "text-yellow-500"
                                : "text-white"
                        }`}
                    >
                        {icon}
                        <span>{label}</span>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <nav className="h-[72px] bg-gray-800">
            <div className="max-w-[1124px] mx-auto flex items-center justify-between">
                <div className="h-10 w-48  rounded-lg">
                    <Image
                        src={logoImg}
                        alt="Logo da NLW Copa"
                        className="hover:cursor-pointer"
                    />
                </div>

                <div className="flex items-center justify-between gap-6">
                    <NavLink
                        label="Meus bolões"
                        icon={<SoccerBall size={18} />}
                        link="/dashboard/meus-boloes"
                    />
                    <NavLink
                        label="Calendário"
                        icon={<CalendarBlank size={18} />}
                        link="/dashboard/calendario"
                    />
                </div>

                <div className="flex items-center justify-between gap-2">
                    <div className="h-9 w-9 rounded-lg flex items-center justify-center hover:bg-zinc-700 hover:cursor-pointer">
                        <Bell size={20} color="white" />
                    </div>
                    <Link href="/">
                        <div className="h-9 w-9 rounded-lg flex items-center justify-center hover:bg-zinc-700 hover:cursor-pointer">
                            <SignOut size={20} color="white" />
                        </div>
                    </Link>
                    <div className="h-12 w-12 bg-zinc-700 rounded-full hover:cursor-pointer">
                        <Image
                            src="/avatar.jpg"
                            alt="Foto do usuário logado"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                    </div>
                </div>
            </div>
        </nav>
    );
}
