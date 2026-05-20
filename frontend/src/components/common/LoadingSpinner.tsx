"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sprout } from "lucide-react";

export const LoadingSpinner: React.FC<{ label?: string }> = ({
    label = "Synchronizing Intelligent Matrices..."
}) => {
    return (
        <div className="flex flex-col items-center justify-center p-8 space-y-4">
            <div className="relative w-16 h-16 flex items-center justify-center">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/30 border-t-emerald-400"
                />
                <motion.div
                    animate={{ scale: [0.9, 1.1, 0.9] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="p-2 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                >
                    <Sprout className="w-6 h-6 text-emerald-400" />
                </motion.div>
            </div>
            <p className="text-xs font-mono tracking-widest text-slate-400 animate-pulse uppercase">
                {label}
            </p>
        </div>
    );
};