import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import { PoolForm } from "../../features/PoolForm";
import { FAB } from "../FAB";
import { Navbar } from "../Navbar";

type CommonProps = {
    children: ReactNode;
};

export function Common(props: CommonProps) {
    return (
        <div className="h-screen mx-auto">
            <Navbar />

            <div className="max-w-[1280px] mx-auto mt-10">{props.children}</div>

            <Dialog.Root>
                <FAB />
                <PoolForm />
            </Dialog.Root>
        </div>
    );
}
