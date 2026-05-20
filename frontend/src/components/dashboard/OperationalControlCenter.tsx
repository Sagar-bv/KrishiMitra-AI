"use client";

import React from "react";
import { GlassCard } from "../common/GlassCard";
import { Activity, ShieldCheck, Cpu, Radio } from "lucide-react";

interface TelemetryMetrics {
    integrityScore: number;
    hectaresActive: number;
    totalInferences: number;
}

export const OperationalControlCenter: React.FC<{ metrics?: TelemetryMetrics }> = ({
    metrics = { integrityScore: 94.2, hectaresActive: 120.5, totalInferences: 1482 }
}) => {
    return (
        <GlassCard className="p-6 md:col-span-2 flex flex-col justify-between gap-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2.5">
                    <Activity className="w-5 h-5 text-emerald-400" />
                    <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                        Operational Control Center
                    </h2>
                </div>
                <div className="flex items-center space-x-1.5 px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] font-mono text-emerald-400">
                    <ShieldCheck className="w-3 h-3" />
                    <span>GRID INTEGRITY SECURE</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
                <div className="flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-xl relative group">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Farm Integrity Matrix
                    </span>
                    <span className="text-3xl font-black text-white tracking-tight mt-1 neon-text-glow">
                        {metrics.integrityScore}%
                    </span>
                    <Cpu className="w-4 h-4 text-emerald-400/20 absolute bottom-3 right-3" />
                </div>

                <div className="flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-xl relative">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Spatial Bound Footprint
                    </span>
                    <span className="text-3xl font-black text-emerald-400 tracking-tight mt-1">
                        {metrics.hectaresActive}<span className="text-xs text-slate-400 font-normal"> HA</span>
                    </span>
                    <Radio className="w-4 h-4 text-emerald-400/20 absolute bottom-3 right-3 animate-pulse" />
                </div>

                <div className="flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-xl relative">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Telemetry Inferences
                    </span>
                    <span className="text-3xl font-black text-cyan-400 tracking-tight mt-1">
                        {metrics.totalInferences.toLocaleString()}
                    </span>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full absolute bottom-4 right-4 animate-ping" />
                </div>
            </div>
        </GlassCard>
    );
};