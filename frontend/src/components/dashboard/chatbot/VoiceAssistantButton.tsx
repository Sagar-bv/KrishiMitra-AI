"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";

export const VoiceAssistantButton: React.FC = () => {
    const [capturing, setCapturing] = useState(false);

    const toggleCapture = () => {
        setCapturing(!capturing);
    };

    return (
        <div className="relative">
            {capturing && (
                <motion.span
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute inset-0 rounded-lg bg-emerald-500/30 pointer-events-none"
                />
            )}
            <button
                type="button"
                onClick={toggleCapture}
                className={`p-1.5 rounded-lg border transition-all ${capturing
                        ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
                        : "bg-white/5 text-slate-400 border-white/10 hover:text-slate-200"
                    }`}
            >
                {capturing ? <Mic className="w-4 h-4 animate-pulse" /> : <MicOff className="w-4 h-4" />}
            </button>
        </div>
    );
};