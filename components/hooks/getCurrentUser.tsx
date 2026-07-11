import axios from "axios";
import axiosInstance from "./axiosInstance";
export async function getCurrentUser() {
  try {
    const { data } = await axiosInstance.get("/login/me");
    return data.user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(error.response?.data);
    }
    return null;
  }
}

export async function logoutUser() {
  try {
    const { data } = await axiosInstance.post("/login/logout");
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message || "Logout failed");
    }
    throw error;
  }
}