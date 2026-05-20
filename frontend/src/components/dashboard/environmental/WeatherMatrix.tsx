"use client";

import React from "react";
import { GlassCard } from "../../common/GlassCard";
import { CloudSun, Thermometer, Droplets, Wind } from "lucide-react";

interface WeatherData {
    temp: number;
    humidity: number;
    windSpeed: number;
}

export const WeatherMatrix: React.FC<{ telemetry?: WeatherData }> = ({
    telemetry = { temp: 28.4, humidity: 62.8, windSpeed: 14.2 }
}) => {
    return (
        <GlassCard className="p-6 flex flex-col justify-between gap-4 border border-white/10">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <CloudSun className="w-5 h-5 text-cyan-400" />
                    <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                        Micro-Climate Matrix
                    </h2>
                </div>
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
                        <Thermometer className="w-4 h-4 text-rose-400" />
                        <span>Thermal Gradient</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-white">{telemetry.temp} °C</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
                        <Droplets className="w-4 h-4 text-cyan-400" />
                        <span>Saturation Quotient</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-cyan-400">{telemetry.humidity} %</span>
                </div>

                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex items-center space-x-2 text-xs font-medium text-slate-400">
                        <Wind className="w-4 h-4 text-slate-400" />
                        <span>Wind Vector</span>
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-300">{telemetry.windSpeed} km/h</span>
                </div>
            </div>
        </GlassCard>
    );
};