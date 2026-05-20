"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { CalendarDays, Wallet, Percent } from "lucide-react";

interface FruitPlan {
    variety: string;
    horizonYears: number;
    expectedRoi: number;
}

export const FruitPlanCard: React.FC<{ plan: FruitPlan }> = ({ plan }) => {
    return (
        <GlassCard className="p-6 md:col-span-2 space-y-4 border border-white/10">
            <div className="flex items-center space-x-2">
                <CalendarDays className="w-5 h-5 text-lime-400" />
                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                    Macro Investment Rotation Scheduling Planner
                </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Target Cultivar</span>
                    <p className="text-sm font-bold text-white mt-1">{plan.variety}</p>
                </div>
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Maturation Horizon</span>
                    <p className="text-sm font-bold text-cyan-400 mt-1">{plan.horizonYears} Fiscal Years</p>
                </div>
                <div className="p-4 bg-white/[0.01] border border-white/5 rounded-xl">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Calculated Yield Projection</span>
                    <div className="flex items-center space-x-1 text-sm font-bold text-emerald-400 mt-1">
                        <Percent className="w-3.5 h-3.5" />
                        <span>{plan.expectedRoi}% Alpha Trend</span>
                    </div>
                </div>
            </div>
        </GlassCard>
    );
};