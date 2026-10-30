import axios from "axios";

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});


export async function safeFetch<T>(
  endpoint: string,
  options?: RequestInit & { next?: { revalidate?: number } }
): Promise<{ data: T | null; error: string | null }> {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_API;

  // ১. যদি Base URL undefined হয়, তাহলে সতর্কবার্তা দিয়ে null রিটার্ন করবে (Build crash রোধ করবে)
  if (!baseUrl) {
    console.error('[API Config Error] NEXT_PUBLIC_BACKEND_API is missing. Please check your .env file.');
    return { data: null, error: 'API base URL is not configured in environment variables.' };
  }

  // ২. URL সঠিকভাবে জয়েন করা (Trailing/Leading slash সমস্যা দূর করতে)
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
    // আপনার API রেসপন্স অনুযায়ী json.data অথবা শুধু json রিটার্ন করুন
    return { data: json?.data ?? json, error: null };
  } catch (error) {
    console.error(`[API Fetch Error] Failed to fetch ${url}:`, error);
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
}