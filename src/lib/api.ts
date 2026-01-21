export const API_BASE_URL = "http://localhost:3002";

export const API_URL = "http://localhost:3002";

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
