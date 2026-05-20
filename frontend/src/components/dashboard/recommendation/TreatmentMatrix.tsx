"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { FlaskConical, Leaf, ShieldAlert } from "lucide-react";

interface TreatmentData {
    chemicalProtocol: string;
    organicMitigation: string;
    preventativeSteps: string;
}

export const TreatmentMatrix: React.FC<{ blueprint: TreatmentData }> = ({ blueprint }) => {
    return (
        <GlassCard className="p-6 md:col-span-2 space-y-6 border border-white/10">
            <div className="flex items-center space-x-2.5">
                <FlaskConical className="w-5 h-5 text-cyan-400" />
                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                    AI Target Treatment Protocol Matrix
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold font-mono uppercase text-slate-300">
                        <FlaskConical className="w-3.5 h-3.5 text-rose-400" />
                        <span>Molecular Compound Protocol</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                        {blueprint.chemicalProtocol}
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold font-mono uppercase text-slate-300">
                        <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Biological Mitigation Array</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                        {blueprint.organicMitigation}
                    </p>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center space-x-1.5 text-xs font-bold font-mono uppercase text-slate-300">
                        <ShieldAlert className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Bio-Security Hardening</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-mono p-3 bg-white/[0.01] border border-white/5 rounded-xl">
                        {blueprint.preventativeSteps}
                    </p>
                </div>
            </div>
        </GlassCard>
    );
};