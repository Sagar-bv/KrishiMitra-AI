"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { ShieldCheck, Target, AlertTriangle } from "lucide-react";

interface DiagnosisResult {
    diseaseName: string;
    confidence: number;
    healthy: boolean;
}

export const ResultAnalysisCard: React.FC<{ result: DiagnosisResult }> = ({ result }) => {
    return (
        <GlassCard className="p-5 border border-white/10 space-y-4">
            <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    Inference Node Analysis
                </span>
                {result.healthy ? (
                    <div className="flex items-center space-x-1 text-xs font-mono text-emerald-400">
                        <ShieldCheck className="w-3.5 h-3.5" /> <span>NEGATIVE HEALTH ANOMALY</span>
                    </div>
                ) : (
                    <div className="flex items-center space-x-1 text-xs font-mono text-rose-400">
                        <AlertTriangle className="w-3.5 h-3.5" /> <span>PATHOGEN MATRIX DETECTED</span>
                    </div>
                )}
            </div>

            <div className="p-4 bg-white/5 border border-white/5 rounded-xl flex justify-between items-center">
                <div>
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Classification Output</h3>
                    <p className="text-lg font-bold text-white mt-0.5">{result.diseaseName}</p>
                </div>
                <div className="text-right">
                    <h3 className="text-xs font-mono text-slate-400 uppercase tracking-wider">Confidence Ratio</h3>
                    <div className="flex items-center space-x-1.5 mt-0.5 justify-end">
                        <Target className="w-4 h-4 text-cyan-400" />
                        <span className="text-base font-mono font-black text-cyan-300">
                            {(result.confidence * 100).toFixed(1)}%
                        </span>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};