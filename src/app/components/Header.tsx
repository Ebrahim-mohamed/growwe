"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavTab } from "./NavTab";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "https://api.growwe.com";
const navTabs = ["about", "products", "horticulture", "contact"];

export function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [cartItemCount, setCartItemCount] = useState<number>(0);

  function onCloseMenu() {
    if (isOpen) setIsOpen(false);
  }

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "ar" : "en";
    router.push(`/${nextLocale}${pathname.replace(/^\/(en|ar)/, "")}`);
  };

  // Fetch cart count
  const fetchCartCount = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      setCartItemCount(0);
      return;
    }

    try {
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
        }
      }

      if (res.ok) {
        const data = await res.json();
        const totalItems =
          data.cart?.reduce(
            (sum: number, item: any) => sum + item.quantity,
            0,
          ) || 0;
        setCartItemCount(totalItems);
      }
    } catch (error) {
      console.error("Failed to fetch cart count:", error);
    }
  };

  // Check login status
  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("accessToken");
      setIsLoggedIn(!!token);
      if (token) {
        fetchCartCount();
      }
    };

    checkAuth();

    // Listen for storage changes
    window.addEventListener("storage", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
    };
  }, []);

  // Update login status when pathname changes
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setIsLoggedIn(!!token);
    if (token) {
      fetchCartCount();
    }
  }, [pathname]);

  // Custom event listener for cart updates
  useEffect(() => {
    const handleCartUpdate = () => {
      fetchCartCount();
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <div className="flex items-center justify-between gap-[2rem] py-10 px-[var(--section-Padding)] absolute top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
      {/* Logo */}
      <div className="flex-1">
        <Link href={`/${locale}`}>
          <Image
            alt="logo image"
            src="/logo.png"
            width={100}
            height={100}
            priority
            className="w-[15rem]"
          />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="z-50 text-left w-full"
          >
            <Image
              alt="close menu icon"
              width={100}
              height={100}
              className="w-[3rem] aspect-square"
              src="/close.png"
            />
          </button>
          <div className="absolute left-0 top-0 w-full h-dvh bg-white flex flex-col items-center justify-center gap-[1rem]">
            {navTabs.map((link) => (
              <NavTab
                name={t(link)}
                to={link}
                key={link}
                onClose={onCloseMenu}
              />
            ))}
          </div>
        </>
      )}

      {/* Desktop Navigation */}
      <div className="flex items-center justify-between w-fit gap-[3rem] max-[800px]:hidden">
        {navTabs.map((link) => (
          <NavTab name={t(link)} to={link} key={link} />
        ))}
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-10 max-[1100px]:gap-5 flex-1">
        {/* Mobile Menu Button */}
        <button className="min-[800px]:hidden" onClick={() => setIsOpen(true)}>
          <Image
            alt="menu icon"
            width={100}
            height={100}
            className="w-[3rem] aspect-square"
            src="/menu.png"
          />
        </button>

        {/* Language Switcher */}
        <button
          onClick={toggleLanguage}
          className="text-white text-[1.5rem] hover:cursor-pointer hover:opacity-80 transition"
        >
          {locale === "en" ? "العربية" : "English"}
        </button>

        {/* Cart Icon with Badge */}
        <Link href={`/${locale}/cart`} className="relative">
          <Image
            alt="cart image"
            src="/cart.png"
            priority
            className="w-[1.8rem]"
            width={20}
            height={20}
          />
          {cartItemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {cartItemCount > 9 ? "9+" : cartItemCount}
            </span>
          )}
        </Link>

        {/* Profile Icon */}
        <Link href={isLoggedIn ? `/${locale}/profile` : `/${locale}/login`}>
          <Image
            alt="profile image"
            src="/profile.png"
            priority
            className="w-[1.7rem]"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
