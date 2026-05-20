import { create } from "zustand";

export interface ChatMessage {
    id: string;
    sender: "user" | "ai";
    text: string;
    timestamp: string;
}

interface ChatState {
    messages: ChatMessage[];
    streaming: boolean;
    textInput: string;
    setTextInput: (input: string) => void;
    sendMessage: (text: string) => void;
    appendSystemMessage: (text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
    messages: [
        {
            id: "init-node",
            sender: "ai",
            text: "SYSTEM INITIALIZED. Cognitive streams aligned. Ready for multi-vector matrix queries.",
            timestamp: new Date().toISOString(),
        },
    ],
    streaming: false,
    textInput: "",
    setTextInput: (input) => set({ textInput: input }),
    sendMessage: (text) => {
        const userMsg: ChatMessage = {
            id: Math.random().toString(36).substring(7),
            sender: "user",
            text,
            timestamp: new Date().toISOString(),
        };
        set((state) => ({ messages: [...state.messages, userMsg], streaming: true }));

        // Mock processing context for architectural fulfillment
        setTimeout(() => {
            const aiResponse: ChatMessage = {
                id: Math.random().toString(36).substring(7),
                sender: "ai",
                text: `Vector matching completed for segment: "${text}". Agronomic variables compiled successfully.`,
                timestamp: new Date().toISOString(),
            };
            set((state) => ({ messages: [...state.messages, aiResponse], streaming: false }));
        }, 1500);
    },
    appendSystemMessage: (text) => {
        const msg: ChatMessage = {
            id: Math.random().toString(36).substring(7),
            sender: "ai",
            text,
            timestamp: new Date().toISOString(),
        };
        set((state) => ({ messages: [...state.messages, msg] }));
    },
}));