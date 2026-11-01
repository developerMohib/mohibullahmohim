import { ApiErrorResponse, PortfolioConfig } from "@/types/chatbot";
import axios from "axios";
import { api } from "./api";

export const getPortfolioConfig = async (): Promise<PortfolioConfig> => {
  const { data } = await api.get<{ data?: PortfolioConfig } | PortfolioConfig>(
    "/chat/data"
  );

  return "data" in data && data.data ? data.data : (data as PortfolioConfig);
};

export const updatePortfolioConfig = async (
  config: PortfolioConfig,
  adminKey: string
): Promise<void> => {
  await api.patch("/chat/update/data", config, {
    headers: {
      "X-Admin-Key": adminKey,
    },
  });
};

export const getApiErrorMessage = (error: unknown): string => {
  if (axios.isAxiosError<ApiErrorResponse>(error)) {
    return (
      error.response?.data?.message ||
      error.response?.data?.detail ||
      error.message ||
      "Request failed."
    );
  }

  if (error instanceof Error) return error.message;

  return "An unexpected error occurred.";
};