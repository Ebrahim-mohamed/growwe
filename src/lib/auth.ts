// src/lib/auth.ts
import axios from "axios";
import { API_BASE_URL } from "@/utils/api";

let accessToken: string | null =
  typeof window !== "undefined" ? localStorage.getItem("accessToken") : null;

export function getAccessToken() {
  return accessToken;
}
export function setAccessToken(token: string | null) {
  accessToken = token;
  if (typeof window !== "undefined") {
    if (token) localStorage.setItem("accessToken", token);
    else localStorage.removeItem("accessToken");
  }
}

export async function refreshAccessToken() {
  try {
    const res = await axios.post(
      `${API_BASE_URL}/auth/refresh`,
      {},
      { withCredentials: true }
    );
    setAccessToken(res.data.accessToken);
    return res.data.accessToken;
  } catch {
    setAccessToken(null);
    return null;
  }
}

export async function apiFetch(input: RequestInfo, init: RequestInit = {}) {
  // attach access token
  if (!init.headers) init.headers = {};
  const token = getAccessToken();
  if (token) (init.headers as any).Authorization = `Bearer ${token}`;
  const res = await fetch(
    input.toString().startsWith("https") ? input : `${API_BASE_URL}${input}`,
    { ...init, credentials: "include" }
  );
  if (res.status === 401) {
    // try refresh once
    const newToken = await refreshAccessToken();
    if (newToken) {
      (init.headers as any).Authorization = `Bearer ${newToken}`;
      return fetch(
        input.toString().startsWith("https")
          ? input
          : `${API_BASE_URL}${input}`,
        { ...init, credentials: "include" }
      );
    }
  }
  return res;
}
