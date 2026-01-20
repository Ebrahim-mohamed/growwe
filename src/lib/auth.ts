// lib/auth.ts
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.growwe.com";

export async function refreshAccessToken(): Promise<string | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Refresh token failed");
    }

    const data = await response.json();
    localStorage.setItem("accessToken", data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error("Token refresh error:", error);
    localStorage.removeItem("accessToken");
    return null;
  }
}

export function getAccessToken(): string | null {
  return localStorage.getItem("accessToken");
}

export async function logout(): Promise<void> {
  try {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      credentials: "include",
    });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    localStorage.removeItem("accessToken");
    window.location.href = "/login";
  }
}
