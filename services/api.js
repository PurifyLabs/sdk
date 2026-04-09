import axios from "axios";
import { API_URL } from "../../config/env";

const api = axios.create({
  baseURL: API_URL,
});

export const getMarketData = async () => {
  try {
    const res = await api.get("/market");
    return res.data;
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};

export default api;
