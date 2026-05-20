"use client";

import React from "react";
import { MessageSquare } from "lucide-react";

export const WindowFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="xl:col-span-1 h-full min-h-[580px] max-h-[680px] bg-[#0b1329]/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] flex flex-col justify-between overflow-hidden relative group">
            <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <h2 className="text-xs font-bold tracking-wider uppercase text-slate-200 font-mono">
                        Cognitive Assistant
                    </h2>
                </div>
                <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">
                        WS DUPLEX
                    </span>
                </div>
            </div>
            {children}
        </div>
    );
};