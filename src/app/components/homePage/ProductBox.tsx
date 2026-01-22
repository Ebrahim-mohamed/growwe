"use client";

import { productType } from "@/app/types/types";
import Image from "next/image";
import { useState } from "react";
import { useLocale } from "next-intl";
import { refreshAccessToken } from "@/lib/auth";

const API_BASE_URL = "https://api.growwe.com";

export function ProductBox(product: productType) {
  const locale = useLocale();
  const [loading, setLoading] = useState(false);

  const addToCart = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        alert("Please login first");
        window.location.href = `/${locale}/login`;
        return;
      }

      let res = await fetch(`${API_BASE_URL}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
        body: JSON.stringify({
          productId: product.id,
          quantity: 1,
        }),
      });

      if (res.status === 401) {
        const newToken = await refreshAccessToken();
        if (newToken) {
          res = await fetch(`${API_BASE_URL}/cart`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${newToken}`,
            },
            credentials: "include",
            body: JSON.stringify({
              productId: product.id,
              quantity: 1,
            }),
          });
        } else {
          alert("Session expired. Please login again");
          window.location.href = `/${locale}/login`;
          return;
        }
      }

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.message || "Failed to add to cart");
      }

      alert("Product added to cart successfully!");

      // Dispatch custom event to update cart count in header
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Failed to add to cart");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-[0.5rem] w-[90%] overflow-hidden max-[550px]:max-w-[34rem] border-2 border-[#E6E6E6]">
      <div className="w-full bg-white">
        <img
          alt="product image"
          src={`${API_BASE_URL}${product.img}`}
          className="w-full h-full"
        />
      </div>
      <div className="p-[1rem] bg-[#FAFAF5]">
        <div className="flex items-center justify-between gap-2">
          <div className="font-bold">
            <h1 className="text-black text-[1.2rem]">{product.header}</h1>
            <p className="text-[#426B1F] text-[1.25rem]">
              EGP {product.price} / {product.type}
            </p>
          </div>
          <button
            onClick={addToCart}
            disabled={loading}
            className="disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Image
              alt="add button"
              src="/add-button.svg"
              width={100}
              height={100}
              className="w-[3rem] hover:cursor-pointer mb-[0.5rem]"
            />
          </button>
        </div>
        <div className="text-[1rem] text-[#6D6D6D] font-normal">
          {product.description.substring(0, 100)}...
        </div>
      </div>
    </div>
  );
}
