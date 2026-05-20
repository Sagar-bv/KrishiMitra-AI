"use client";
import { motion } from "framer-motion";
import {
    Sprout, Cpu, CloudSun, LineChart, MessageSquare, ShieldCheck,
    Layers, Database, CalendarDays, Activity, RefreshCw
} from "lucide-react";

export default function DashboardOrchestratorPortal() {
    return (
        <div className="w-full min-h-screen p-6 bg-[#020617] flex flex-col gap-6">
            {/* Top Telemetry Header Status Panel */}
            <div className="w-full glass-panel p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/10">
                <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 border border-emerald-500/30 rounded-xl">
                        <Sprout className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div>
                        <div className="flex items-center space-x-2">
                            <h1 className="text-xl font-black text-white tracking-wide">KRISHIMITRA CORE OPERATIONAL COMPILATION</h1>
                            <span className="px-2 py-0.5 bg-emerald-500/10 border border-emerald-500/30 rounded text-[10px] text-emerald-400 font-mono tracking-widest animate-pulse">ONLINE</span>
                        </div>
                        <p className="text-xs text-slate-400 font-mono">NODE IDENTIFIER: KM-CLUSTER-BGLR-2026</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-right font-mono">
                    <div className="hidden md:block">
                        <p className="text-[10px] text-slate-500">HARDWARE TIMELINE CONTEXT</p>
                        <p className="text-xs text-slate-300">2026-05-19 20:17:58 UTC</p>
                    </div>
                    <button className="p-2 bg-white/5 border border-white/10 rounded-lg text-slate-400 hover:text-white transition-colors duration-200">
                        <RefreshCw className="w-4 h-4" />
                    </button>
                </div>
            </div>

            {/* Main Structural Asynchronous Control Layer Grid System */}
            <div className="w-full grid grid-cols-1 xl:grid-cols-4 gap-6 items-start">

                {/* LEFT TWO COLUMNS: SYSTEM ENGINE CARD SHELF */}
                <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1: Operational Control Center / Farm Integrity Score Card */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-6 md:col-span-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <Activity className="w-5 h-5 text-emerald-400" />
                                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300">Operational Control Center</h2>
                            </div>
                            <span className="text-xs font-mono px-2 py-0.5 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400">STRUCTURAL INTEGRITY OK</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-2">
                            <div className="flex flex-col items-center sm:items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Farm Integrity Index</span>
                                <span className="text-4xl font-black text-white tracking-tight mt-1 neon-text-glow">94.2<span className="text-sm text-slate-400">%</span></span>
                            </div>
                            <div className="flex flex-col items-center sm:items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Total Evaluated Land Bounds</span>
                                <span className="text-4xl font-black text-emerald-400 tracking-tight mt-1">120.5<span className="text-sm text-slate-400"> HA</span></span>
                            </div>
                            <div className="flex flex-col items-center sm:items-start p-4 bg-white/5 rounded-xl border border-white/5">
                                <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Model Processing Inferences</span>
                                <span className="text-4xl font-black text-cyan-400 tracking-tight mt-1">1,482</span>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Micro-Climate Weather Intelligence Telemetry Module */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <CloudSun className="w-5 h-5 text-cyan-400" />
                                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300">Micro-Climate Intelligence</h2>
                            </div>
                            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                        </div>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-sm text-slate-400">Ambient Thermal Matrix</span>
                                <span className="font-mono text-base font-bold text-white">28.4 °C</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-sm text-slate-400">Atmospheric Vapor Saturation</span>
                                <span className="font-mono text-base font-bold text-cyan-400">62.8 %</span>
                            </div>
                            <div className="flex justify-between items-center border-b border-white/5 pb-2">
                                <span className="text-sm text-slate-400">Wind Vector Direction Velocity</span>
                                <span className="font-mono text-base font-bold text-slate-300">14.2 km/h SSE</span>
                            </div>
                        </div>
                        <div className="p-2 bg-cyan-500/10 border border-cyan-500/20 rounded-xl text-[11px] text-cyan-400 font-mono leading-relaxed">
                            ALERT: Evapotranspiration velocity trending higher. Schedule localized irrigation cycle deployment patterns.
                        </div>
                    </div>

                    {/* Card 3: Real-Time Market Ledger Analytics Module */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <LineChart className="w-5 h-5 text-amber-400" />
                                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300">Market Ledger Analytics</h2>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded border border-amber-500/20">ARBITRAGE WINDOW</span>
                        </div>
                        <div className="space-y-3">
                            <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between border border-white/5">
                                <div>
                                    <p className="text-sm font-bold text-white">Oryza Sativa (Rice)</p>
                                    <p className="text-[10px] text-slate-400 font-mono">VOL: 2,400 MT</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-mono font-bold text-emerald-400">₹2,450 / क्विंटल</p>
                                    <p className="text-[10px] text-emerald-500 font-mono font-semibold">+4.2% OVER DAY</p>
                                </div>
                            </div>
                            <div className="p-3 bg-white/5 rounded-xl flex items-center justify-between border border-white/5">
                                <div>
                                    <p className="text-sm font-bold text-white">Triticum Aestivum (Wheat)</p>
                                    <p className="text-[10px] text-slate-400 font-mono">VOL: 1,850 MT</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-mono font-bold text-rose-400">₹2,120 / क्विंटल</p>
                                    <p className="text-[10px] text-rose-500 font-mono font-semibold">-0.8% RETREAT</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: High-Performance CNN Plant Pathology Diagnostic Lab */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 md:col-span-2 space-y-4">
                        <div className="flex items-center space-x-2">
                            <Cpu className="w-5 h-5 text-emerald-400" />
                            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300">CNN Leaf Diagnostics Inference Lab</h2>
                        </div>
                        <div className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center text-center group hover:border-emerald-500/40 transition-colors duration-200 cursor-pointer bg-white/[0.01]">
                            <div className="p-4 bg-white/5 rounded-full border border-white/10 text-slate-400 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-200 mb-3">
                                <Database className="w-6 h-6" />
                            </div>
                            <p className="text-sm font-medium text-slate-200">Transmit High-Resolution Leaf Specimen Image Payload</p>
                            <p className="text-xs text-slate-500 font-mono mt-1">SUPPORTED FORMAT BOUNDARIES: JPEG, PNG, WEBP (MAX FILE PAYLOAD: 15MB)</p>
                        </div>
                    </div>

                    {/* Card 5: Algorithmic Multi-Year Crop Rotation Allocation Planner */}
                    <div className="glass-panel p-6 rounded-2xl border border-white/10 md:col-span-2 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <CalendarDays className="w-5 h-5 text-lime-400" />
                                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-300">Macro Investment Rotation Scheduling Planner</h2>
                            </div>
                            <span className="text-xs font-mono text-slate-400">MODEL RE-EVAL: VALID 2026-2029</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-[10px] font-mono text-slate-400 uppercase">Sequence Alpha Crop</div>
                                <div className="text-lg font-bold text-white mt-1">Gossypium (Cotton)</div>
                                <div className="text-xs text-emerald-400 font-mono mt-2">Suitability: 96/100</div>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-[10px] font-mono text-slate-400 uppercase">Sequence Beta Crop</div>
                                <div className="text-lg font-bold text-white mt-1">Cicer Arietinum</div>
                                <div className="text-xs text-cyan-400 font-mono mt-2">Nitrogen Restoring Matrix</div>
                            </div>
                            <div className="p-4 bg-white/5 border border-white/5 rounded-xl">
                                <div className="text-[10px] font-mono text-slate-400 uppercase">Actuarial Risk Exposure</div>
                                <div className="text-lg font-bold text-amber-400 mt-1">Low - Index 0.22</div>
                                <div className="text-xs text-slate-500 font-mono mt-2">Mitigation Pipeline Set</div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* RIGHT COLUMN: COGNITIVE REAL-TIME CHATBOT INTERACTION SCREEN */}
                <div className="xl:col-span-1 h-full min-h-[600px] glass-panel rounded-2xl border border-white/10 flex flex-col justify-between overflow-hidden">
                    <div className="p-4 border-b border-white/10 bg-white/5 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <MessageSquare className="w-5 h-5 text-cyan-400" />
                            <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">Cognitive AI Assistant</h2>
                        </div>
                        <div className="flex items-center space-x-1">
                            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                            <span className="text-[10px] font-mono text-slate-400">WS ACTIVE</span>
                        </div>
                    </div>

                    {/* Chat Feed Segment */}
                    <div className="flex-grow p-4 space-y-4 overflow-y-auto custom-scrollbar text-xs font-mono">
                        <div className="p-3 bg-white/5 rounded-xl border border-white/5 max-w-[85%] text-slate-300 leading-relaxed">
                            SYSTEM INITIALIZED. Network pipelines securely established across target weather, market index, and CNN analytics matrices. Provide domain queries for synthesis.
                        </div>
                    </div>

                    {/* Interactive Text/Voice Payload Entry Subsystem */}
                    <div className="p-4 border-t border-white/10 bg-[#020617]/50 space-y-2">
                        <div className="w-full flex items-center space-x-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 group focus-within:border-cyan-500/50 transition-colors">
                            <input
                                type="text"
                                placeholder="Query global agricultural model matrices..."
                                className="bg-transparent border-none outline-none flex-grow text-xs text-white placeholder-slate-500 font-sans"
                            />
                            <button className="p-1.5 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-lg text-xs font-bold hover:bg-cyan-500/30 transition-colors">
                                Transmit
                            </button>
                        </div>
                        <div className="text-[9px] text-center text-slate-500 font-mono">
                            SECURE WEBSOCKET STREAMING GATEWAY: AES-256 ENCRYPTED SHA-256 SIGNED
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}