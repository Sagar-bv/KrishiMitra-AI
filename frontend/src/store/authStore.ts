import { create } from "zustand";

interface AuthState {
    authenticated: boolean;
    token: string | null;
    operatorId: string | null;
    setSession: (token: string, operatorId: string) => void;
    logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    authenticated: typeof window !== "undefined" && !!localStorage.getItem("km_auth_token"),
    token: typeof window !== "undefined" ? localStorage.getItem("km_auth_token") : null,
    operatorId: null,
    setSession: (token, operatorId) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("km_auth_token", token);
        }
        set({ authenticated: true, token, operatorId });
    },
    logout: () => {
        if (typeof window !== "undefined") {
            localStorage.removeItem("km_auth_token");
        }
        set({ authenticated: false, token: null, operatorId: null });
    },
}));