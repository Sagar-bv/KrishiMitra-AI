import { apiClient } from "./apiClient";

export const recommenderService = {
    async fetchCropSuitabilityRanking(soilMetrics: any) {
        const response = await apiClient.post("/recommender/suitability", soilMetrics);
        return response.data;
    },

    async executeInferenceDiagnostics(imageFile: File) {
        const formData = new FormData();
        formData.append("file", imageFile);
        const response = await apiClient.post("/recommender/diagnose", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response.data;
    }
};