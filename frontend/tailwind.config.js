/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                agri: {
                    void: "#020617",
                    crust: "#0b1329",
                    glow: "#10B981",
                    cyan: "#22D3EE",
                    warn: "#F59E0B",
                    lime: "#84CC16"
                }
            },
            boxShadow: {
                'glass-inner': 'inset 0 1px 2px 0 rgba(255, 255, 255, 0.05)',
                'glass-panel': '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
            },
            backdropBlur: {
                xl: '24px'
            }
        },
    },
    plugins: [],
}