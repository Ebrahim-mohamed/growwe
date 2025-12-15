"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { SelectedItemBox } from "./SelectedItemBox";
import { API_BASE_URL } from "@/utils/api";
import { refreshAccessToken } from "@/lib/auth";

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
  const t = useTranslations("cart.shoppingSection");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadCart() {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");
      let res = await fetch(`${API_BASE_URL}/users/me`, {
        headers: { Authorization: `Bearer ${token}` },
        credentials: "include",
      });

      if (!res.ok) {
        // try refresh
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_BASE_URL}/users/me`, {
            headers: { Authorization: `Bearer ${newToken}` },
            credentials: "include",
          });
        } else {
          window.location.href = "/login";
          return;
        }
      }

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

  const checkout = async () => {
    try {
      const token = localStorage.getItem("accessToken");
      const items = cart.map((c) => ({
        name: c.productId?.nameEN || "product",
        price: Math.round((c.productId?.price || 0) * 100), // amount in cents
        quantity: c.quantity,
        productId: c.productId._id,
      }));

      const amount_cents = items.reduce(
        (s, it) => s + it.price * it.quantity,
        0
      );

      const res = await fetch(`${API_BASE_URL}/payments/create-pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          amount_cents,
          order: { items, orderNumber: `local-${Date.now()}` },
        }),
      });

      const data = await res.json();
      if (data.iframeURL) {
        window.open(data.iframeURL, "_blank");
      } else {
        alert("Payment initiation failed");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!cart.length) return <div>No items in cart</div>;

  const totalPrice = cart.reduce(
    (sum, c) => sum + (c.productId?.price || 0) * c.quantity,
    0
  );

  return (
    <div className="flex flex-col items-center justify-center gap-[2.5rem] p-[var(--section-Padding)] w-full">
      <h1 className="text-[2.5rem] text-[#1E1E1E] font-bold">{t("title")}</h1>

      <div className="rounded-[2.25rem] p-[2rem] text-black [box-shadow:0_4px_11.7px_0_rgba(0,0,0,0.25)_inset,0_4px_38.8px_0_rgba(0,0,0,0.25)] w-[80%]">
        <div className="w-full flex justify-start mb-4">
          <a
            className="text-[1.5rem] font-semibold flex items-center gap-[1rem]"
            href="#"
          >
            <p className="text-[3rem]">&#x2039;</p>
            <p className="mt-[0.4rem]">{t("return")}</p>
          </a>
        </div>

        <div className="w-full h-[0.1rem] bg-[#D0CFCF] mb-4"></div>

        <div className="flex flex-col gap-[2rem]">
          {cart.map((c) => (
            <SelectedItemBox
              key={c.productId._id}
              img={c.productId.productImage}
              name={c.productId.nameEN}
              price={c.productId.price}
              que={c.quantity}
            />
          ))}

          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold">
              {t("total")}: {totalPrice} EGP
            </p>
            <button
              onClick={checkout}
              className="text-[1.5rem] font-bold text-white bg-black rounded-[1.5rem] py-[0.5rem] px-[1rem] cursor-pointer"
            >
              {t("checkout")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
