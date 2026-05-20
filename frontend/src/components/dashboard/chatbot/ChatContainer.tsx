"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WindowFrame } from "./WindowFrame";
import { VoiceAssistantButton } from "./VoiceAssistantButton";
import { useChatStore } from "@/store/chatStore";

export const ChatContainer: React.FC = () => {
    const { messages, streaming, textInput, setTextInput, sendMessage } = useChatStore();
    const trackingRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        trackingRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, streaming]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!textInput.trim()) return;
        sendMessage(textInput);
        setTextInput("");
    };

    return (
        <WindowFrame>
            <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar flex flex-col">
                <AnimatePresence initial={false}>
                    {messages.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, x: msg.sender === "user" ? 15 : -15 }}
                            animate={{ opacity: 1, x: 0 }}
                            className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed font-mono ${msg.sender === "user"
                                    ? "bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 self-end"
                                    : "bg-white/5 border border-white/5 text-slate-300 self-start"
                                }`}
                        >
                            {msg.text}
                        </motion.div>
                    ))}
                    {streaming && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="bg-white/5 border border-white/5 text-cyan-400 max-w-[85%] p-3 rounded-xl text-xs font-mono self-start animate-pulse"
                        >
                            Synthesizing response vectors...
                        </motion.div>
                    )}
                </AnimatePresence>
                <div ref={trackingRef} />
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t border-white/10 bg-[#020617]/50 flex flex-col gap-2">
                <div className="w-full flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 focus-within:border-cyan-500/40 transition-colors">
                    <input
                        type="text"
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder="Query agricultural matrix models..."
                        className="bg-transparent border-none outline-none flex-grow text-xs text-white placeholder-slate-500 font-mono"
                        disabled={streaming}
                    />
                    <VoiceAssistantButton />
                    <button
                        type="submit"
                        disabled={streaming || !textInput.trim()}
                        className="px-3 py-1.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg text-xs font-bold hover:bg-cyan-500/30 disabled:opacity-40 transition-colors"
                    >
                        Transmit
                    </button>
                </div>
            </form>
        </WindowFrame>
    );
};