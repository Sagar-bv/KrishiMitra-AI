import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "KrishiMitra | Enterprise AI Agriculture Orchestration Platform",
    description: "Real-time automated agricultural matrix optimization ecosystem powered by neural leaf diagnostics, micro-climate telemetry, and generative advisory pipelines.",
    applicationName: "KrishiMitra",
    keywords: ["Smart Agriculture", "Agri-Tech AI", "Crop Disease Detection", "Market Arbitration", "FastAPI NextJS Stack"],
    authors: [{ name: "KrishiMitra Core Infrastructure Group" }],
    icons: {
        icon: "/favicon.ico",
    }
};

export const viewport: Viewport = {
    themeColor: "#020617",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={`${inter.variable} scroll-smooth dark`}>
            <body className="font-sans antialiased bg-[#020617] text-slate-50 custom-scrollbar relative">
                <div className="fixed inset-0 matrix-grid-overlay pointer-events-none z-0" />
                <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
                <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0" />
                <main className="relative z-10 w-full min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    );
}