import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface AppDefinition {
    id: AppId;
    name: string;
    header: {
        override: boolean;
        content?: React.ReactNode
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

type AppId = "resume" | "whoami" | "portfolio"

const Apps: Record<AppId, AppDefinition> = {
    resume: {
        id: "resume",
        name: "Do u Want 2 Resume?",
        header: {
            override: true,
            content: (() => (
                <>
                    <h1>Have a break, Have a Resume?</h1>
                </>
            )
            )()
        },
        content: (() => (
            <>
                <h1>Have a break, Have a Resume?</h1>
            </>
        )
        )(),
        logo: "",
        position: {
            x: 0,
            y: 0,
            z: 0,
            fixed: false
        },
        size: {
            height: 200,
            width: 200,
            static: false
        }
    },
    whoami: {
        id: "whoami",
        name: "1st tell me Who R U??",
        header: {
            override: true,
            content: (() => (
                <>
                    <h1>Who am I, truly?</h1>
                </>
            )
            )()
        },
        content: (() => (
            <>
                <h1>Who am I, truly?</h1>
            </>
        )
        )(),
        logo: "",
        position: {
            x: 0,
            y: 0,
            z: 0,
            fixed: false
        },
        size: {
            height: 200,
            width: 200,
            static: false
        }
    },
    portfolio: {
        id: "portfolio",
        name: "I heard Polio or smthing?",
        header: {
            override: true,
            content: (() => (
                <>
                    <h1>Is it my portfolio?</h1>
                </>
            )
            )()
        },
        content: (() => (
            <>
                <h1>Is it my portfolio?</h1>
            </>
        )
        )(),
        logo: "",
        position: {
            x: 0,
            y: 0,
            z: 0,
            fixed: false
        },
        size: {
            height: 200,
            width: 200,
            static: false
        }
    }
}

const INITIAL_Z_POSITION = 0

interface App {
    apps: typeof Apps;
    nextZPosition: number;

    openApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;
}

export const useApp = create<App>()(
    immer(set => ({
        apps: Apps,
        nextZPosition: INITIAL_Z_POSITION + 1,

        openApp(id) {
            set((state) => {
                state.apps[id].position.z = state.nextZPosition
            })
        },
        closeApp(id) {
            set((state) => {
                state.apps[id].position.z = -1
            })
        }
    }))
)