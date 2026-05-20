import { create } from "zustand";

interface TelemetryMetrics {
    integrityScore: number;
    hectaresActive: number;
    totalInferences: number;
}

interface WeatherMetrics {
    temp: number;
    humidity: number;
    windSpeed: number;
}

interface DashboardState {
    telemetry: TelemetryMetrics;
    weather: WeatherMetrics;
    loading: boolean;
    updateTelemetry: (metrics: Partial<TelemetryMetrics>) => void;
    updateWeather: (weather: Partial<WeatherMetrics>) => void;
    setLoadingState: (loading: boolean) => void;
}

export const useGlobalDashboardStore = create<DashboardState>((set) => ({
    telemetry: {
        integrityScore: 94.2,
        hectaresActive: 120.5,
        totalInferences: 1482,
    },
    weather: {
        temp: 28.4,
        humidity: 62.8,
        windSpeed: 14.2,
    },
    loading: false,
    updateTelemetry: (metrics) =>
        set((state) => ({ telemetry: { ...state.telemetry, ...metrics } })),
    updateWeather: (weather) =>
        set((state) => ({ weather: { ...state.weather, ...weather } })),
    setLoadingState: (loading) => set({ loading }),
}));