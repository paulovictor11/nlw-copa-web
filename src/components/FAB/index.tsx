import * as Dialog from "@radix-ui/react-dialog";
import { Plus } from "phosphor-react";

export function FAB() {
    return (
        <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end">
            <Dialog.Trigger className="bg-yellow-500 rounded-full px-3 h-12 text-black flex items-center group">
                <Plus size={24} />
                <span className="max-w-0 font-medium overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2" />
                    Novo bolão
                </span>
            </Dialog.Trigger>
        </div>
    );
}
