import axios from "axios";

export const apiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || "http://127.0.0.1:8000/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 30000,
});

apiClient.interceptors.request.use(
    (config) => {
        if (typeof window !== "undefined") {
            const token = localStorage.getItem("km_auth_token");
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401 && typeof window !== "undefined") {
            localStorage.removeItem("km_auth_token");
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);