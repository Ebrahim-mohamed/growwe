
"use client";

import { useRouter } from "next/navigation";


export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch(
        `https://api.growwe.com/auth/admin/logout`,
        {
          method: "POST",
          credentials: "include",
        }
      );

      if (!response.ok) {
        console.error("Logout request failed.");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      router.replace("/admin-login");
      router.refresh();
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="rounded-lg bg-red-500/10 px-4 py-2 text-red-400 transition hover:bg-red-500/20"
    >
      Logout
    </button>
  );
}
