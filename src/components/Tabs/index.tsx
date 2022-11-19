import * as RadixTabs from "@radix-ui/react-tabs";
import { ReactNode } from "react";

type TabRootProps = {
    defaultValue: string;
    children: ReactNode;
};

function TabRoot(props: TabRootProps) {
    return (
        <RadixTabs.Root defaultValue={props.defaultValue}>
            {props.children}
        </RadixTabs.Root>
    );
}

TabRoot.displayName = "Tabs.Root";

type TabListProps = {
    children: ReactNode;
};

function TabList(props: TabListProps) {
    return (
        <RadixTabs.List className="bg-gray-800 rounded p-2 mb-4 flex gap-2">
            {props.children}
        </RadixTabs.List>
    );
}

TabList.displayName = "Tabs.List";

type TabTriggerProps = {
    value: string;
    label: string;
};

function TabTrigger(props: TabTriggerProps) {
    return (
        <RadixTabs.Trigger
            value={props.value}
            className="rounded py-2 px-11 font-bold text-white text-xs hover:bg-gray-600 state-active:bg-gray-600"
        >
            {props.label}
        </RadixTabs.Trigger>
    );
}

TabTrigger.displayName = "Tabs.Trigger";

type TabContentProps = {
    value: string;
    children: ReactNode;
};

function TabContent(props: TabContentProps) {
    return (
        <RadixTabs.Content value={props.value}>
            {props.children}
        </RadixTabs.Content>
    );
}

TabContent.displayName = "Tabs.Content";

export const Tabs = {
    Root: TabRoot,
    List: TabList,
    Trigger: TabTrigger,
    Content: TabContent,
};
