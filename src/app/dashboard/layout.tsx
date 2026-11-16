
"use client";

import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const verifyAdmin = async () => {
      const adminToken = localStorage.getItem("adminToken");

      if (!adminToken) {
        router.replace("/admin-login");
        return;
      }

      try {
        const response = await fetch(
          "https://api.growwe.com/auth/admin/me",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${adminToken}`,
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          localStorage.removeItem("adminToken");

          router.replace("/admin-login");
          return;
        }

        if (isMounted) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Admin verification error:", error);

        localStorage.removeItem("adminToken");
        router.replace("/admin-login");
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    verifyAdmin();

    return () => {
      isMounted = false;
    };
  }, [router]);

  if (loading || !isAuthenticated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black">
        <p className="text-white">
          Verifying authentication...
        </p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen">
      <DashboardNavbar />

      <main className="min-w-0 flex-1">
        {children}
      </main>
    </div>
  );
}
