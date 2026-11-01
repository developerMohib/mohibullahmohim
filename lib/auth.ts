import axios from "axios";
import { api } from "./api";
export async function getCurrentUser() {
    try {
        const { data } = await api.get("/login/me");
        return data.user;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return null;
        }
        return null;
    }
}

export async function logoutUser() {
    try {
        const { data } = await api.post("/login/logout");
        return data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.message || "Logout failed");
        }
        throw error;
    }
}