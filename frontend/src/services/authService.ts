import { apiClient } from "./apiClient";

export interface AuthPayload {
    username?: string;
    password?: string;
    idToken?: string;
}

export const authService = {
    async authenticateStandard(payload: AuthPayload) {
        const response = await apiClient.post("/auth/login", payload);
        return response.data;
    },

    async authenticateFederated(payload: { idToken: string }) {
        const response = await apiClient.post("/auth/google", payload);
        return response.data;
    },

    async invalidateSession() {
        if (typeof window !== "undefined") {
            localStorage.removeItem("km_auth_token");
        }
        return Promise.resolve({ status: "DECOUPLED" });
    }
};