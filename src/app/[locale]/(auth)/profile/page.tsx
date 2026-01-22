"use client";

import { MostUseHeader } from "@/app/components/MostUseHeader";
import { Hero } from "@/app/components/profilePage/HeroSection";
import { PersonalData } from "@/app/components/profilePage/PersonalData";
import { ProfileTabs } from "@/app/components/profilePage/ProfileTabs";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { refreshAccessToken } from "@/lib/auth";
import { useRouter } from "next/navigation";

const API_BASE_URL = "https://api.growwe.com";

type UserData = {
  userName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  area: string;
};

export default function Profile() {
  const t = useTranslations("profile.heroSection");
  const locale = useLocale();
  const router = useRouter();

  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      setLoading(true);
      try {
        const token = localStorage.getItem("accessToken");

        if (!token) {
          router.replace(`/${locale}/login`);
          return;
        }

        let res = await fetch(`${API_BASE_URL}/users/me`, {
          headers: { Authorization: `Bearer ${token}` },
          credentials: "include",
        });

        if (res.status === 401) {
          const newToken = await refreshAccessToken();

          if (newToken) {
            res = await fetch(`${API_BASE_URL}/users/me`, {
              headers: { Authorization: `Bearer ${newToken}` },
              credentials: "include",
            });
          } else {
            router.replace(`/${locale}/login`);
            return;
          }
        }

        if (!res.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await res.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchUserData();
  }, [locale, router]);

  function handleLogout() {
    // Optional: call backend logout endpoint
    fetch(`${API_BASE_URL}/auth/logout`, { credentials: "include" });

    localStorage.removeItem("accessToken");
    router.replace(`/${locale}`);
    window.location.reload();
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Failed to load user data</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Hero />

      <div className="pt-[var(--section-Padding)] px-[var(--section-Padding)]">
        <MostUseHeader header={t("header")} des={t("des")} />
      </div>

      <PersonalData
        email={userData.email}
        img="person"
        name={userData.userName}
        number={userData.phone}
      />

      <ProfileTabs />

      {/* Logout Button */}
      <div className="mt-auto flex justify-center py-10">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white text-[1.1rem] font-medium px-8 py-3 rounded-full transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
