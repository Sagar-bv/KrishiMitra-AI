"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Sprout, Menu, X, Globe, LogOut, LayoutDashboard } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { authenticated, logout } = useAuthStore();
    const [mobileOpen, setMobileOpen] = useState(false);
    const [currentLang, setCurrentLang] = useState("EN");

    const navItems = [
        { label: "Dashboard", path: "/dashboard", icon: <LayoutDashboard className="w-4 h-4" /> }
    ];

    return (
        <nav className="w-full border-b border-white/10 bg-[#020617]/80 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="p-2 bg-emerald-500/20 border border-emerald-500/30 rounded-lg group-hover:border-emerald-400 transition-colors">
                        <Sprout className="w-5 h-5 text-emerald-400" />
                    </div>
                    <span className="text-lg font-black tracking-wider text-white uppercase">
                        KRISHI<span className="text-emerald-400">MITRA</span>
                    </span>
                </Link>

                {/* Desktop Interface Context */}
                <div className="hidden md:flex items-center space-x-6">
                    {authenticated && navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center space-x-1 text-sm font-semibold tracking-wide transition-colors ${pathname === item.path ? "text-emerald-400" : "text-slate-400 hover:text-slate-200"
                                }`}
                        >
                            {item.icon}
                            <span>{item.label}</span>
                        </Link>
                    ))}

                    {/* Multilingual Swapper */}
                    <button
                        onClick={() => setCurrentLang(currentLang === "EN" ? "HI" : currentLang === "HI" ? "TE" : "EN")}
                        className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono font-bold hover:bg-white/10 text-cyan-400 transition-colors"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        <span>{currentLang}</span>
                    </button>

                    {authenticated ? (
                        <button
                            onClick={logout}
                            className="flex items-center space-x-1.5 px-4 py-2 border border-rose-500/30 rounded-lg text-xs font-bold text-rose-400 hover:bg-rose-500/10 transition-all"
                        >
                            <LogOut className="w-3.5 h-3.5" />
                            <span>Disconnect Terminal</span>
                        </button>
                    ) : (
                        <Link
                            href="/login"
                            className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-xs font-bold rounded-lg hover:brightness-110 shadow-[0_4px_12px_rgba(16,185,129,0.2)] transition-all"
                        >
                            Initialize Command Core
                        </Link>
                    )}
                </div>

                {/* Mobile Toggle Trigger */}
                <button className="md:hidden text-slate-300" onClick={() => setMobileOpen(!mobileOpen)}>
                    {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Menu Panel Expansion */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden w-full bg-[#020617] border-t border-white/5 mt-4 overflow-hidden flex flex-col space-y-4 px-2 py-4"
                    >
                        {authenticated && navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={() => setMobileOpen(false)}
                                className={`flex items-center space-x-2 p-2 rounded-xl font-medium ${pathname === item.path ? "bg-emerald-500/10 text-emerald-400" : "text-slate-400"
                                    }`}
                            >
                                {item.icon}
                                <span>{item.label}</span>
                            </Link>
                        ))}
                        <div className="flex items-center justify-between border-t border-white/5 pt-4">
                            <button
                                onClick={() => setCurrentLang(currentLang === "EN" ? "HI" : currentLang === "HI" ? "TE" : "EN")}
                                className="flex items-center space-x-1.5 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono"
                            >
                                <Globe className="w-4 h-4 text-cyan-400" />
                                <span>Language: {currentLang}</span>
                            </button>
                            {authenticated && (
                                <button onClick={logout} className="px-3 py-2 border border-rose-500/30 rounded-lg text-xs text-rose-400 font-bold flex items-center space-x-1">
                                    <LogOut className="w-4 h-4" /> <span>Disconnect</span>
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};