"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { SelectedItemBox } from "./SelectedItemBox";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "https://api.growwe.com";

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
  const [checkoutLoading, setCheckoutLoading] = useState(false);

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

  // Update quantity
  const updateQuantity = async (productId: string, newQuantity: number) => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) return;

      let res = await fetch(`${API_BASE_URL}/cart/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({ quantity: newQuantity }),
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (!newToken) return;

        res = await fetch(`${API_BASE_URL}/cart/${productId}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${newToken}`,
          },
          credentials: "include",
          body: JSON.stringify({ quantity: newQuantity }),
        });
      }

      if (!res.ok) throw new Error("Update failed");

      // Update UI
      setCart((prev) =>
        prev.map((item) =>
          item.productId._id === productId
            ? { ...item, quantity: newQuantity }
            : item,
        ),
      );

      // Notify header to update badge
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      alert("Failed to update quantity");
    }
  };

  // Remove item
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

      // Notify header to update badge
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err) {
      console.error(err);
      alert("Failed to remove item");
    }
  };

  // Checkout
  const checkout = async () => {
    setCheckoutLoading(true);
    try {
      let token = localStorage.getItem("accessToken");

      if (!token) {
        alert("Please login first");
        window.location.href = `/${locale}/login`;
        return;
      }

      const items = cart.map((c) => ({
        name: c.productId?.nameEN || "product",
        price: Math.round((c.productId?.price || 0) * 100),
        quantity: c.quantity,
        productId: c.productId._id,
      }));

      const amount_cents = items.reduce(
        (s, it) => s + it.price * it.quantity,
        0,
      );

      let res = await fetch(`${API_BASE_URL}/payments/create-pay`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          amount_cents,
          order: { items, orderNumber: `order-${Date.now()}` },
        }),
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_BASE_URL}/payments/create-pay`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
            credentials: "include",
            body: JSON.stringify({
              amount_cents,
              order: { items, orderNumber: `order-${Date.now()}` },
            }),
          });
        } else {
          alert("Session expired. Please login again");
          window.location.href = `/${locale}/login`;
          return;
        }
      }

      if (!res.ok) {
        throw new Error("Payment initiation failed");
      }

      const data = await res.json();
      if (data.iframeURL) {
        window.open(data.iframeURL, "_blank");
        // Optionally reload cart after payment
        setTimeout(() => {
          loadCart();
          window.dispatchEvent(new Event("cartUpdated"));
        }, 2000);
      } else {
        alert("Payment initiation failed");
      }
    } catch (err) {
      console.error(err);
      alert("Checkout failed");
    } finally {
      setCheckoutLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#426B1F] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  if (!cart.length) {
    return (
      <div className="flex flex-col justify-center items-center min-h-[400px] gap-4">
        <svg
          className="w-24 h-24 text-gray-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <p className="text-2xl font-semibold text-gray-600">
          Your cart is empty
        </p>
        <a
          href={`/${locale}/products`}
          className="mt-4 px-6 py-3 bg-[#426B1F] text-white rounded-lg hover:bg-[#355519] transition"
        >
          Continue Shopping
        </a>
      </div>
    );
  }

  const totalPrice = cart.reduce(
    (sum, c) => sum + c.productId.price * c.quantity,
    0,
  );

  const totalItems = cart.reduce((sum, c) => sum + c.quantity, 0);

  return (
    <div className="flex flex-col items-center gap-[2.5rem] p-[var(--section-Padding)] w-full">
      <h1 className="text-[2.5rem] font-bold text-[#1E1E1E]">{t("title")}</h1>

      <div className="w-[90%] max-w-[1200px] rounded-[2.25rem] p-[2rem] bg-white shadow-lg">
        {/* Back Link */}
        <div className="w-full flex justify-start mb-4">
          <a
            className="text-[1.5rem] font-semibold flex items-center gap-[1rem] text-[#426B1F] hover:text-[#355519] transition"
            href={`/${locale}/products`}
          >
            <p className="text-[3rem]">&#x2039;</p>
            <p className="mt-[0.4rem]">{t("return") || "Continue Shopping"}</p>
          </a>
        </div>

        <div className="w-full h-[0.1rem] bg-[#D0CFCF] mb-6"></div>

        {/* Cart Items */}
        <div className="flex flex-col gap-[1rem] mb-6">
          {cart.map((c) => (
            <SelectedItemBox
              key={c.productId._id}
              productId={c.productId._id}
              img={c.productId.productImage}
              name={locale === "ar" ? c.productId.nameAR : c.productId.nameEN}
              price={c.productId.price}
              que={c.quantity}
              onRemove={() => removeFromCart(c.productId._id)}
              onUpdateQuantity={(newQty) =>
                updateQuantity(c.productId._id, newQty)
              }
            />
          ))}
        </div>

        <div className="w-full h-[0.1rem] bg-[#D0CFCF] mb-6"></div>

        {/* Summary */}
        <div className="flex flex-col gap-4">
          {/* Items Count */}
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Total Items:</span>
            <span className="font-semibold">{totalItems}</span>
          </div>

          {/* Subtotal */}
          <div className="flex justify-between items-center text-lg">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">{totalPrice.toFixed(2)} EGP</span>
          </div>

          {/* Total */}
          <div className="flex justify-between items-center text-2xl font-bold border-t-2 border-gray-200 pt-4">
            <span>{t("total") || "Total"}:</span>
            <span className="text-[#426B1F]">{totalPrice.toFixed(2)} EGP</span>
          </div>

          {/* Checkout Button */}
          <button
            onClick={checkout}
            disabled={checkoutLoading}
            className="w-full mt-4 text-[1.5rem] font-bold text-white bg-[#426B1F] hover:bg-[#355519] rounded-[1.5rem] py-[1rem] px-[2rem] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg"
          >
            {checkoutLoading ? (
              <span className="flex items-center justify-center gap-2">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                Processing...
              </span>
            ) : (
              t("checkout") || "Proceed to Checkout"
            )}
          </button>

          {/* Security Note */}
          <p className="text-center text-sm text-gray-500 mt-2">
            🔒 Secure payment via Paymob
          </p>
        </div>
      </div>
    </div>
  );
}
