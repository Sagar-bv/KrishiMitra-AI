"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { Star, Award } from "lucide-react";

interface CropRecommendation {
    cropName: string;
    suitabilityScore: number;
    rank: number;
}

export const CropRankCard: React.FC<{ crop: CropRecommendation }> = ({ crop }) => {
    return (
        <GlassCard className="p-4 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
                <div className="p-2.5 bg-lime-500/10 border border-lime-500/20 rounded-xl text-lime-400">
                    <Award className="w-4 h-4" />
                </div>
                <div>
                    <h4 className="text-xs font-mono uppercase text-slate-500">Rank Vector 0{crop.rank}</h4>
                    <p className="text-sm font-bold text-white mt-0.5">{crop.cropName}</p>
                </div>
            </div>
            <div className="text-right">
                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">Suitability</span>
                <div className="flex items-center space-x-1 mt-0.5 justify-end text-sm font-mono font-black text-lime-400">
                    <Star className="w-3.5 h-3.5 fill-lime-400/20" />
                    <span>{crop.suitabilityScore}/100</span>
                </div>
            </div>
        </GlassCard>
    );
};