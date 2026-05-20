import { apiClient } from "./apiClient";

export interface RotationRequest {
    hectares: number;
    coordinates: { lat: number; lng: number };
    horizonYears: number;
}

export const plannerService = {
    async generateRotationSchedule(payload: RotationRequest) {
        const response = await apiClient.post("/planner/rotation", payload);
        return response.data;
    },

    async fetchInvestmentProjections(planId: string) {
        const response = await apiClient.get(`/planner/projections/${planId}`);
        return response.data;
    }
};