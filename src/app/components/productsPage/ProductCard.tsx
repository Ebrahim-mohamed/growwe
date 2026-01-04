"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
  productOrder: number;
}

export function ProductCard({ product, productOrder }: ProductCardProps) {
  const t = useTranslations("products.productsSection");
  const locale = useLocale();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);

  // Choose the correct language fields
  const name = locale === "ar" ? product.nameAR : product.nameEN;
  const description = locale === "ar" ? product.desAR : product.desEN;
  const type = locale === "ar" ? product.typeAR : product.typeEN;
  const unit = locale === "ar" ? product.unitAR : product.unitEN;

  const increase = () => {
    if (quantity < product.quantity) setQuantity((q) => q + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity((q) => q - 1);
  };

  const addToCart = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://growwe.com/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Add Authorization header if using JWT: Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          productId: product._id,
          quantity,
        }),
      });

      if (!res.ok) throw new Error("Failed to add to cart");
      alert(t("addedSuccessfully"));
    } catch (err) {
      console.error(err);
      alert(t("addFailed"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`flex items-center justify-center gap-20 w-full relative max-[580px]:flex-col py-20 ${
        productOrder % 2 !== 0 ? "flex-row-reverse" : ""
      }`}
    >
      {/* Background highlight */}
      <div
        className={`absolute w-full top-0 h-full ${
          productOrder % 2 !== 0 ? "bg-[#FCF7F1]" : ""
        }`}
      />

      {/* Product image */}
      <Image
        alt={name}
        src={`http://growwe.com/api/uploads/${product.productImage}`}
        width={500}
        height={700}
        className="w-[25rem] h-[36rem] object-contain z-50"
        unoptimized
      />

      {/* Product info */}
      <div className="flex flex-col gap-6 flex-1 z-40 max-w-[45rem]">
        <div>
          <h1 className="text-[#426B1F] text-3xl font-semibold">{name}</h1>
          <p className="text-[#E5AC71] font-semibold">
            {product.size} {unit} · {type}
          </p>
        </div>

        <p className="text-black text-lg">{description}</p>

        <div className="flex items-center justify-between gap-4">
          {/* Quantity selector */}
          <div className="flex items-center gap-3 border rounded-full px-3 py-1">
            <button onClick={decrease} className="text-xl font-bold">
              −
            </button>
            <span>{quantity}</span>
            <button onClick={increase} className="text-xl font-bold">
              +
            </button>
          </div>

          {/* Price */}
          <p className="text-xl font-bold">
            {t("egp")} {product.price * quantity}
          </p>

          {/* Add to cart button */}
          <button
            onClick={addToCart}
            disabled={loading}
            className="px-6 py-2 bg-black text-white rounded-full disabled:opacity-50"
          >
            {loading ? t("adding") : t("add")}
          </button>
        </div>
      </div>
    </div>
  );
}
