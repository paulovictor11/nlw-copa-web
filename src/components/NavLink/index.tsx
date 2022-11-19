import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";

type NavLinkProps = {
    label: string;
    icon: ReactNode;
    link: string;
};

export function NavLink({ label, icon, link }: NavLinkProps) {
    const router = useRouter();
    return (
        <Link
            href={link}
            className={`h-[72px] flex flex-col items-center justify-center group hover:cursor-pointer ${
                router.pathname === link ? "border-b-2 border-yellow-500" : ""
            }`}
        >
            <span
                className={`flex items-center justify-center gap-2 group-hover:text-yellow-500 ${
                    router.pathname === link ? "text-yellow-500" : "text-white"
                }`}
            >
                {icon} {label}
            </span>
        </Link>
    );
}
