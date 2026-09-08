import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface AppDefinition {
    id: string;
    name: string;
    header: {
        override: boolean;
        component?: React.ReactNode
    } | string;
    logo: string;
    content: React.ReactNode;
    size: {
        width: number;
        height: number;
        static?: boolean;
    },
    position: {
        x: number;
        y: number;
        z: number;
        fixed?: boolean;
    }
}

interface App {
    apps: []
}

export const useApp = create<App>()(
    immer(set => ({
        apps: []
    }))
)