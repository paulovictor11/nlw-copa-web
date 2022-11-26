import cx from "classnames";
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
            className={cx(
                "h-[72px] flex flex-col items-center justify-center group hover:cursor-pointer",
                {
                    "border-b-2 border-yellow-500": router.pathname === link,
                }
            )}
        >
            <span
                className={cx(
                    "flex items-center justify-center gap-2 text-white group-hover:text-yellow-500",
                    {
                        "text-yellow-500": router.pathname === link,
                    }
                )}
            >
                {icon} {label}
            </span>
        </Link>
    );
}
