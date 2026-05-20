"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Cpu, UploadCloud, FileImage, ShieldAlert } from "lucide-react";

interface UploadWorkflowProps {
    onFileSelect: (file: File) => void;
    processing: boolean;
}

export const ImageUploadWorkflow: React.FC<UploadWorkflowProps> = ({
    onFileSelect,
    processing
}) => {
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") setDragActive(true);
        else if (e.type === "dragleave") setDragActive(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onFileSelect(e.dataTransfer.files[0]);
        }
    };

    return (
        <div className="glass-panel p-6 md:col-span-2 space-y-4 border border-white/10">
            <div className="flex items-center space-x-2.5">
                <Cpu className="w-5 h-5 text-emerald-400" />
                <h2 className="text-sm font-bold tracking-wider uppercase text-slate-200">
                    CNN Leaf Diagnostics Inference Lab
                </h2>
            </div>

            <div
                onDragEnter={handleDrag}
                onDragOver={handleDrag}
                onDragLeave={handleDrag}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center text-center cursor-pointer transition-all ${dragActive
                        ? "border-emerald-400 bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]"
                        : "border-white/10 bg-white/[0.01] hover:border-white/20"
                    }`}
            >
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={(e) => e.target.files?.[0] && onFileSelect(e.target.files[0])}
                    className="hidden"
                    disabled={processing}
                />
                <div className="p-3 bg-white/5 rounded-full border border-white/10 text-slate-400 mb-3">
                    {processing ? (
                        <UploadCloud className="w-6 h-6 text-cyan-400 animate-bounce" />
                    ) : (
                        <FileImage className="w-6 h-6" />
                    )}
                </div>
                <p className="text-xs font-semibold text-slate-200">
                    Transmit High-Resolution Leaf Specimen Image Payload
                </p>
                <p className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-wider">
                    JPEG, PNG, WEBP formats (Max limit: 15MB)
                </p>
            </div>

            {processing && (
                <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                        className="w-1/3 h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                    />
                </div>
            )}
        </div>
    );
};