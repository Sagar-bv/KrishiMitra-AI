import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatCurrency = (val: number, currency: string = "INR"): string => {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
    }).format(val);
};

export const formatPercentage = (val: number): string => {
    return `${val.toFixed(1)}%`;
};

export const formatIsoTimestamp = (isoString: string): string => {
    const d = new Date(isoString);
    return d.toISOString().replace("T", " ").substring(0, 19) + " UTC";
};

export const formatConfidenceRatio = (ratio: number): string => {
    return `${(ratio * 100).toFixed(2)}% Match`;
};