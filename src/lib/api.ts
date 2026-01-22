export const API_BASE_URL = "https://api.growwe.com";

export const API_URL = "https://api.growwe.com";

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
