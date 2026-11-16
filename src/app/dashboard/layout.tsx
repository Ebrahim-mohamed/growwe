
import { DashboardNavbar } from "@/components/dashboard/DashboardNavbar";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default async function DashboardLayout({
  children,
}: Props) {
  const cookieStore = await cookies();

  const adminToken = cookieStore.get("adminToken")?.value;

  if (!adminToken) {
    redirect("/admin-login");
  }

  let isAuthenticated = false;

  try {
    const response = await fetch(
      `https://api.growwe.com/auth/admin/me`,
      {
        method: "GET",
        headers: {
          Cookie: `adminToken=${adminToken}`,
        },
        cache: "no-store",
      }
    );

    isAuthenticated = response.ok;
  } catch (error) {
    console.error("Admin verification error:", error);
  }

  if (!isAuthenticated) {
    redirect("/admin-login");
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
