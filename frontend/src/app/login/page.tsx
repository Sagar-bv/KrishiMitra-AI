"use client";
import { motion } from "framer-motion";
import { Sprout, ShieldCheck, KeyRound, User } from "lucide-react";

export default function SecurityAuthenticationTerminal() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-6 relative">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md glass-panel p-8 rounded-3xl border border-white/10 flex flex-col gap-8 relative overflow-hidden bg-[#0b1329]/30"
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500" />

                {/* Branding Node */}
                <div className="flex flex-col items-center text-center gap-2">
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl w-fit">
                        <Sprout className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h1 className="text-2xl font-black tracking-wider text-white mt-2">TERMINAL SESSION GATEWAY</h1>
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-widest">KrishiMitra Credentials Access Matrix</p>
                </div>

                {/* Input Interface Elements */}
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                    <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                            <User className="w-3.5 h-3.5 text-cyan-400" /> User Access Identifier
                        </label>
                        <input
                            type="text"
                            placeholder="operator@krishimitra.ai"
                            className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-200 font-mono"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                            <KeyRound className="w-3.5 h-3.5 text-cyan-400" /> Cryptographic Key Phase
                        </label>
                        <input
                            type="password"
                            placeholder="••••••••••••••••"
                            className="w-full px-4 py-3 bg-[#020617]/80 border border-white/10 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/50 focus:shadow-[0_0_15px_rgba(16,185,129,0.1)] transition-all duration-200 font-mono"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-xl text-sm shadow-[0_4px_15px_rgba(16,185,129,0.2)] hover:brightness-110 active:scale-[0.99] transition-all duration-150 flex items-center justify-center space-x-2"
                    >
                        <ShieldCheck className="w-4 h-4" />
                        <span>Authenticate Signature</span>
                    </button>
                </form>

                {/* Federated External Identification Divider */}
                <div className="relative flex py-2 items-center text-xs font-mono uppercase text-slate-500">
                    <div className="flex-grow border-t border-white/5" />
                    <span className="flex-shrink mx-4">Or Connect Via Federated Identity</span>
                    <div className="flex-grow border-t border-white/5" />
                </div>

                {/* Identity Federation OAuth Protocol Layer Button */}
                <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-xs font-bold text-slate-200 transition-all duration-200 flex items-center justify-center gap-3">
                    <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                    </svg>
                    <span>Federated OAuth 2.0 (Google System ID)</span>
                </button>

                <div className="text-[10px] text-center font-mono text-slate-500 leading-relaxed">
                    WARN: Unauthorized entry detection protocols active. Dynamic hardware tracing and sliding context blocks will instantiate upon anomalous interaction patterns.
                </div>
            </motion.div>
        </div>
    );
}