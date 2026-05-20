"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { LineChart, TrendingUp, TrendingDown } from "lucide-react";

interface CommodityIndex {
    name: string;
    price: number;
    delta: number;
    volume: string;
    bullish: boolean;
}

export const MarketIntel: React.FC<{ indices?: CommodityIndex[] }> = ({
    indices = [
        { name: "Oryza Sativa (Rice)", price: 2450, delta: 4.2, volume: "2.4K MT", bullish: true },
        { name: "Triticum Aestivum (Wheat)", price: 2120, delta: -0.8, volume: "1.8K MT", bullish: false }
    ]
}) => {
    return (
        <GlassCard className="p-6 flex flex-col justify-between gap-4 border border-white/10">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <LineChart className="w-5 h-5 text-amber-400" />
                    <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                        Market Ledger Analytics
                    </h2>
                </div>
                <span className="text-[9px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20 uppercase tracking-wider">
                    Arbitrage Active
                </span>
            </div>

            <div className="space-y-3">
                {indices.map((index, idx) => (
                    <div key={idx} className="p-3 bg-white/[0.02] rounded-xl flex items-center justify-between border border-white/5">
                        <div>
                            <p className="text-xs font-bold text-white">{index.name}</p>
                            <p className="text-[10px] text-slate-500 font-mono uppercase tracking-wider mt-0.5">Vol: {index.volume}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs font-mono font-bold text-slate-200">₹{index.price} / Qtl</p>
                            <div className={`flex items-center justify-end space-x-0.5 text-[10px] font-mono font-semibold mt-0.5 ${index.bullish ? "text-emerald-400" : "text-rose-400"
                                }`}>
                                {index.bullish ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                                <span>{index.bullish ? `+${index.delta}%` : `${index.delta}%`}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </GlassCard>
    );
};