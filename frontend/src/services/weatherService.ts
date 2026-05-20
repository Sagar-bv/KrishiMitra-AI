import { apiClient } from "./apiClient";

export const weatherService = {
    async fetchSpatialTelemetry(lat: number, lng: number) {
        const response = await apiClient.get(`/weather/telemetry?lat=${lat}&lng=${lng}`);
        return response.data;
    },

    async fetchMicroClimateAdvisories(zoneId: string) {
        const response = await apiClient.get(`/weather/advisories/${zoneId}`);
        return response.data;
    }
};