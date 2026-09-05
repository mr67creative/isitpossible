import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

interface App {
    apps: []
}

export const useApp = create<App>()(
    immer(set => ({
        apps: []
    }))
)