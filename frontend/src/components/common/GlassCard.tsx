"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/formatters";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    animate?: boolean;
    hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
    children,
    className,
    animate = true,
    hoverEffect = true,
    ...props
}) => {
    const classes = cn(
        "relative overflow-hidden rounded-2xl bg-[#0b1329]/40 backdrop-blur-xl",
        "border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]",
        hoverEffect && "hover:border-emerald-500/30 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)] transition-all duration-300 ease-out",
        className
    );

    if (!animate) {
        return (
            <div className={classes} {...props}>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                {children}
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className={classes}
            {...props}
        >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {children}
        </motion.div>
    );
};