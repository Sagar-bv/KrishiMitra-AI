"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle, Zap } from "lucide-react";

export const InsightTickerBar: React.FC = () => {
    const tickerItems = [
        { icon: <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />, text: "Oryza Sativa (Rice) trading volumes ascending. Arbitrage index indicates macro pricing peaks." },
        { icon: <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />, text: "Evapotranspiration warnings calculated for Zone-7. System advises localized drip deployment." },
        { icon: <Zap className="w-3.5 h-3.5 text-cyan-400" />, text: "CNN Inference module calibrated successfully against updated class indices repository." }
    ];

    return (
        <div className="w-full bg-[#0b1329]/60 border-y border-white/5 h-10 overflow-hidden flex items-center relative z-20">
            <div className="bg-emerald-500/10 border-r border-white/10 px-4 h-full flex items-center text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-black shrink-0 z-10 select-none">
                Live Stream Telemetry
            </div>
            <motion.div
                animate={{ x: [0, -1200] }}
                transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                className="flex items-center space-x-16 whitespace-nowrap pl-8"
            >
                {[...tickerItems, ...tickerItems].map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                        {item.icon}
                        <span>{item.text}</span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};