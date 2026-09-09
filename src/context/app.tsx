import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface AppDefinition {
    id: AppId;
    name: string;
    header: {
        override: boolean;
        content: React.ReactNode
    };
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

export type AppId = "resume" | "whoami" | "portfolio"

export const INITIAL_Z_POSITION = 9;

export const Apps: Record<AppId, AppDefinition> = {
    resume: {
        id: "resume",
        name: "Do u Want 2 Resume?",
        header: {
            override: true,
            content: (() => (
                <header className="window-drag-handle cursor-grab">
                    <h1>Resume</h1>
                </header>
            )
            )()
        },
        content: (() => (
            <main className="min-h-full min-w-full">
                <h1>Have a break, Have a Resume?</h1>
            </main>
        )
        )(),
        logo: "",
        position: {
            x: 20,
            y: 20,
            z: INITIAL_Z_POSITION,
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
                <header className="window-drag-handle cursor-grab">
                    <h1>WhoamI</h1>
                </header>
            )
            )()
        },
        content: (() => (
            <main className="min-h-full min-w-full">
                <h1>Who am I, truly?</h1>
            </main>
        )
        )(),
        logo: "",
        position: {
            x: 600,
            y: 100,
            z: INITIAL_Z_POSITION,
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
            override: false,
            content: (() => (
                <h1>Portfolio</h1>
            )
            )()
        },
        content: (() => (
            <main className="min-h-full min-w-full">
                <h1>Is it my portfolio?</h1>
            </main>
        )
        )(),
        logo: "",
        position: {
            x: 350,
            y: 300,
            z: INITIAL_Z_POSITION,
            fixed: false
        },
        size: {
            height: 200,
            width: 200,
            static: false
        }
    }
}

interface App {
    apps: typeof Apps;
    nextZPosition: number;

    focusApp: (id: AppId) => void;
    closeApp: (id: AppId) => void;

    updateRectangle: (id: AppId, rectangle: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    }) => void;
}

export const useApp = create<App>()(
    immer(set => ({
        apps: Apps,
        nextZPosition: INITIAL_Z_POSITION + 1,

        focusApp(id) {
            set((state) => {
                state.apps[id].position.z = state.nextZPosition++
            })
        },
        closeApp(id) {
            set((state) => {
                state.apps[id].position.z = INITIAL_Z_POSITION
            })
        },

        updateRectangle(id, rectangle) {
            set((state) => {
                if (rectangle.height !== undefined) {
                    state.apps[id].size.height = rectangle.height
                }
                if (rectangle.width !== undefined) {
                    state.apps[id].size.width = rectangle.width
                }
                if (rectangle.x !== undefined) {
                    state.apps[id].position.x = rectangle.x
                }
                if (rectangle.y !== undefined) {
                    state.apps[id].position.y = rectangle.y
                }
            })
        }
    }))
)