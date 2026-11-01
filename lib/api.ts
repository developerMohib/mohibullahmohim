import axios, { AxiosInstance } from "axios";

export const api :AxiosInstance= axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "https://app-mohibullahmohim.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});


export async function safeFetch<T>(
  endpoint: string,
  options?: RequestInit & { next?: { revalidate?: number } }
): Promise<{ data: T | null; error: string | null }> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;

  
  if (!baseUrl) {
    console.error('[API Config Error] NEXT_PUBLIC_BACKEND_API is missing. Please check your .env file.');
    return { data: null, error: 'API base URL is not configured in environment variables.' };
  }

  const cleanBaseUrl = baseUrl.replace(/\/+$/, '');
  const cleanEndpoint = endpoint.replace(/^\/+/, '');
  const url = `${cleanBaseUrl}/${cleanEndpoint}`;

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP Error! status: ${res.status} - ${res.statusText}`);
    }

    const json = await res.json();
    return { data: json?.data ?? json, error: null };
  } catch (error) {
    console.error(`[API Fetch Error] Failed to fetch ${url}:`, error);
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}