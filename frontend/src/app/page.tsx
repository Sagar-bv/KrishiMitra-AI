"use client";

import Link from "next/link";

import { motion } from "framer-motion";
import { Sprout, Cpu, BarChart3, CloudLightning, ArrowRight, ShieldAlert } from "lucide-react";

export default function LandingPage() {
    const systems = [
        { icon: <Cpu className="w-6 h-6 text-cyan-400" />, title: "CNN Specimen Diagnostics", desc: "Automated neural leaf diagnostics pipeline delivering sub-second edge inference." },
        { icon: <CloudLightning className="w-6 h-6 text-emerald-400" />, title: "Micro-Climate Telemetry", desc: "Continuous ingestion of targeted local spatial weather matrix metrics." },
        { icon: <BarChart3 className="w-6 h-6 text-amber-400" />, title: "Market Ledger Arbitration", desc: "Predictive commodity trading ledger analytics mapping liquidity horizons." },
        { icon: <Sprout className="w-6 h-6 text-lime-400" />, title: "Macro Investment Planner", desc: "Multi-year algorithmic crop rotation schedule asset distribution matrices." }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col justify-between overflow-hidden">
            {/* Structural Header Navigation */}
            <header className="w-full border-b border-white/10 bg-[#020617]/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg">
                            <Sprout className="w-6 h-6 text-emerald-400" />
                        </div>
                        <span className="text-xl font-black tracking-wider text-white">KRISHI<span className="text-emerald-400">MITRA</span></span>
                    </div>
                    <Link href="/login" className="px-5 py-2 border border-cyan-500/30 rounded-lg text-sm font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                        Establish Terminal Session
                    </Link>
                </div>
            </header>

            {/* Hero Presentation Subsystem */}
            <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 flex-grow flex flex-col items-center text-center justify-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 max-w-4xl"
                >
                    <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs text-emerald-400 font-mono tracking-widest uppercase">
                        <ShieldAlert className="w-3 h-3" /> <span>Unified Neural Platform Active</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight">
                        Autonomous AI <br />
                        <span className="agri-gradient-text">Agricultural Orchestration</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                        Optimize production yields, diagnose plant pathological anomalies instantly, and execute automated localized market optimization mapping strategies.
                    </p>

                    <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/login" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-[0_4px_20px_rgba(16,185,129,0.3)] hover:brightness-110 transition-all duration-200">
                            <span>Initialize Command Core</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>

                {/* Feature Component Array Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-24">
                    {systems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="glass-panel-interactive p-6 rounded-2xl text-left border border-white/5 bg-[#0b1329]/20"
                        >
                            <div className="p-3 bg-white/5 rounded-xl w-fit mb-4 border border-white/10">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Structural Footer */}
            <footer className="w-full border-t border-white/5 py-6 px-6 text-center text-xs text-slate-500 font-mono">
                © 2026 KRISHIMITRA ENTERPRISE INFRASTRUCTURE SYSTEMS LABS. ALL RIGHTS RESERVED.
            </footer>
        </div>
    );
}