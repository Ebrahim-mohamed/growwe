"use client";

import { useLocale, useTranslations } from "next-intl";
import { MulchAndSoilProducts } from "./MulchAndSoilProducts";
import { useEffect, useState } from "react";

export type ProductItem = {
  _id: string;
  productImage: string;
  nameEN: string;
  nameAR: string;
  desEN: string;
  desAR: string;
  price: number;
  quantity: number;
  typeEN: string;
  typeAR: string;
  size: string;
  unitEN: string;
  unitAR: string;
  category: string; // 'soil' | 'mulch'
};

export function Products() {
  const t = useTranslations("homePage.productsSection");
  const locale = useLocale();
  const [isEgypt, setIsEgypt] = useState(false);
  const [soilProducts, setSoilProducts] = useState<ProductItem[]>([]);
  const [mulchProducts, setMulchProducts] = useState<ProductItem[]>([]);
  const API_BASE = "http://localhost:3001"; // backend URL

  useEffect(() => {
    async function checkIfEgypt() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setIsEgypt(data.country_name === "Egypt");
      } catch (error) {
        console.log("Failed to detect location");
      }
    }

    checkIfEgypt();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const [soilRes, mulchRes] = await Promise.all([
          fetch(`${API_BASE}/products?category=soil`),
          fetch(`${API_BASE}/products?category=mulch`),
        ]);

        const soilData = await soilRes.json();
        const mulchData = await mulchRes.json();

        setSoilProducts(soilData || []);
        setMulchProducts(mulchData || []);
      } catch (error) {
        console.error("Failed to fetch products", error);
      }
    }

    fetchProducts();
  }, []);

  if (!isEgypt) {
    return (
      <div className="p-[var(--section-Padding)] relative">
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center w-full mb-[2rem]">
          <h1
            className={`text-black ${
              locale === "en" ? " text-[4rem] " : " text-[5rem] "
            } font-black font-[ClassicoURW]`}
          >
            {t("ProductTitle")}
          </h1>
          <p className="text-black text-[1.5rem] font-medium">
            {t("renewable")}.{t("biodegradable")}.{t("egyptian")}.
          </p>
          <div className="bg-[#E6E6E6] w-full h-[0.1rem] mt-[0.5rem]" />
        </div>

        {/* Not Egypt Sections */}
        <div className="flex flex-col gap-[1.5rem]">
          <p className="text-center text-gray-500">
            {locale === "en"
              ? "Products are not available for your country."
              : "المنتجات غير متاحة لبلدك."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-[var(--section-Padding)] relative">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center w-full mb-[2rem]">
        <h1
          className={`text-black ${
            locale === "en" ? " text-[4rem] " : " text-[5rem] "
          } font-black font-[ClassicoURW]`}
        >
          {t("ProductTitle")}
        </h1>
        <p className="text-black text-[1.5rem] font-medium">
          {t("renewable")}.{t("biodegradable")}.{t("egyptian")}.
        </p>
        <div className="bg-[#E6E6E6] w-full h-[0.1rem] mt-[0.5rem]" />
      </div>

      {/* Soil Products */}
      <MulchAndSoilProducts
        header="soil"
        link="link"
        to="soilless-growing"
        products={soilProducts.map((p) => ({
          id: p._id,
          header: locale === "en" ? p.nameEN : p.nameAR,
          description: locale === "en" ? p.desEN : p.desAR,
          type: locale === "en" ? p.typeEN : p.typeAR,
          price: p.price.toString(),
          img: `/uploads/${p.productImage}`,
        }))}
      />

      <div className="bg-[#E6E6E6] w-full h-[0.1rem] my-[2rem]" />

      {/* Mulch Products */}
      <MulchAndSoilProducts
        header="mulch"
        link="link"
        to="mulch"
        products={mulchProducts.map((p) => ({
          id: p._id,
          header: locale === "en" ? p.nameEN : p.nameAR,
          description: locale === "en" ? p.desEN : p.desAR,
          type: locale === "en" ? p.typeEN : p.typeAR,
          price: p.price.toString(),
          img: `/uploads/${p.productImage}`,
        }))}
      />
    </div>
  );
}
