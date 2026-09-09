import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

type ChatContent = {
    somebody: string;
    me: () => React.ReactNode;
};

const chatContent: Record<string, ChatContent | ChatContent[]> = {
    "introduction": {
        somebody: "Who the HELL is Possible?",
        me: () => <p>Sorry to say but its me (aka Sambhav Aryal)</p>
    },
    "handle": {
        somebody: "What do you handle?",
        me: () => <a href="https://github.com/mr67creative">I am handled by Github lol</a>
    }
}

interface Screen {
    totalAppOpened: number;
    defaultChatContent: Record<string, ChatContent | ChatContent[]>;
    chats: Record<string, ChatContent | ChatContent[]>;
}

export const useScreen = create<Screen>()(
    immer(set => ({
        totalAppOpened: 0,

        defaultChatContent: chatContent,
        chats: {
            introduction: chatContent.introduction,
            handle: chatContent.handle
        }
    })))