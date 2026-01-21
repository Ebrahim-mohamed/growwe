"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SelectedItemBox } from "./SelectedItemBox";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "http://localhost:3002";

interface CartItem {
  productId: {
    _id: string;
    nameEN: string;
    nameAR: string;
    price: number;
    productImage: string;
  };
  quantity: number;
}

export function ShoppingSection() {
  const locale = useLocale();
  const t = useTranslations("cart.shoppingSection");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCart() {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        window.location.href = `/${locale}/login`;
        return;
      }

      let res = await fetch(`${API_BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (!newToken) {
          window.location.href = `/${locale}/login`;
          return;
        }

        res = await fetch(`${API_BASE_URL}/users/me`, {
          headers: { Authorization: `Bearer ${newToken}` },
          credentials: "include",
        });
      }

      if (!res.ok) throw new Error("Failed to load cart");

      const data = await res.json();
      setCart(data.cart || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadCart();
  }, []);

  // 🗑 REMOVE ITEM
  const removeFromCart = async (productId: string) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      let res = await fetch(`${API_BASE_URL}/cart/${productId}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (!newToken) return;

        res = await fetch(`${API_BASE_URL}/cart/${productId}`, {
          method: "DELETE",
          headers: { Authorization: `Bearer ${newToken}` },
          credentials: "include",
        });
      }

      if (!res.ok) throw new Error("Remove failed");

      // Update UI
      setCart((prev) =>
        prev.filter((item) => item.productId._id !== productId),
      );

      // 🔔 Notify header to update badge
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl">Loading cart...</p>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <p className="text-xl">No items in cart</p>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (sum, c) => sum + c.productId.price * c.quantity,
    0,
  );

  return (
    <div className="flex flex-col items-center gap-[2.5rem] p-[var(--section-Padding)] w-full">
      <h1 className="text-[2.5rem] font-bold">{t("title")}</h1>

      <div className="w-[80%] rounded-[2.25rem] p-[2rem] bg-white shadow-inner">
        {cart.map((c) => (
          <SelectedItemBox
            key={c.productId._id}
            img={c.productId.productImage}
            name={locale === "ar" ? c.productId.nameAR : c.productId.nameEN}
            price={c.productId.price}
            que={c.quantity}
            onRemove={() => removeFromCart(c.productId._id)}
          />
        ))}

        <div className="flex justify-between items-center mt-6">
          <p className="text-xl font-bold">
            {t("total")}: {totalPrice.toFixed(2)} EGP
          </p>
        </div>
      </div>
    </div>
  );
}
