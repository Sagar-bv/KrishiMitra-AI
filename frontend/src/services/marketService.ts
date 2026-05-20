import { apiClient } from "./apiClient";

export const marketService = {
    async fetchCommodityLedger(zone: string = "all") {
        const response = await apiClient.get(`/market/ledger?zone=${zone}`);
        return response.data;
    },

    async fetchMarketArbitrageForecast() {
        const response = await apiClient.get("/market/forecast");
        return response.data;
    }
};