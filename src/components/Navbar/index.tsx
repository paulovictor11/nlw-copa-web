import Link from "next/link";
import Image from "next/image";
import logoImg from "../../assets/logo.svg";
import { Bell, CalendarBlank, SignOut, SoccerBall } from "phosphor-react";
import { Avatar } from "../Avatar";
import { NavLink } from "../NavLink";

export function Navbar() {
    return (
        <nav className="h-[72px] bg-gray-800">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                <div className="h-10 w-48  rounded-lg">
                    <Image src={logoImg} alt="Logo da NLW Copa" />
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

                    <Avatar />
                </div>
            </div>
        </nav>
    );
}
