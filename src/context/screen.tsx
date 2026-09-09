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
    },
    "whatisthis": {
        somebody: "What is odd (not even) this?",
        me: () => <p>A, An, The OS + Chat based portfolio</p>
    },
    "reach": {
        somebody: "I donot want to Reach out 2u",
        me: () => <a href="mailto:mr67creative@gmail.com">Don't click to reach me</a>
    },
    "projects": {
        somebody: "U have anything to so?",
        me: () => <p>Nah! I've everything to show: (COMING SOON)</p>
    }
}

interface Screen {
    totalAppOpened: number;
    defaultChatContent: Record<string, ChatContent | ChatContent[]>;
    chats: Record<string, ChatContent | ChatContent[]>;

    unlockChat: (chatId: string) => void;
}

export const useScreen = create<Screen>()(
    immer(set => ({
        totalAppOpened: 0,

        defaultChatContent: chatContent,
        chats: {
            introduction: chatContent.introduction,
            handle: chatContent.handle,
            whatisthis: chatContent.whatisthis,
            // reach: chatContent.reach,
            // projects: chatContent.projects
        },

        unlockChat(chatId) {
            set((state) => {
                const content = chatContent[chatId]

                if (content) {
                    state.chats[chatId] = content
                }
            })
        }
    })))