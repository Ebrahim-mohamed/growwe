export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://growwe.com/api";

export const API_URL = "http://growwe.com/api";

export async function api(path: string, options?: RequestInit) {
  const token = localStorage.getItem("token");

  return fetch(API_URL + path, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options?.headers,
    },
  }).then((res) => res.json());
}
