"use client";

import { useLocale, useTranslations } from "next-intl";
import { MulchAndSoilProducts } from "./MulchAndSoilProducts";
import { useEffect, useState } from "react";
import { NotEgyptProductSection } from "./NotEgyptProductSection";

const products = [
  {
    header: "Soil Alternative- 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "1",
  },
  {
    header: "Soil Alternative- 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "2",
  },
  {
    header: "Soil Alternative - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "3",
  },
  {
    header: "Soil Alternative - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "4",
  },
  {
    header: "Soil Alternative - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "5",
  },
  {
    header: "Soil Alternative - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product1.png",
    id: "6",
  },
];

export function Products() {
  const t = useTranslations("homePage.productsSection");
  const locale = useLocale();
  const [isEgypt, setIsEgypt] = useState(false);
  useEffect(() => {
    async function checkIfEgypt() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        console.log(data);
        const isEgypt = data.country_name === "Egypt";
        setIsEgypt(isEgypt);
        console.log("Is user in Egypt?", isEgypt);
      } catch (error) {
        console.log("Failed to detect location");
      }
    }

    checkIfEgypt();
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

        <div className="flex flex-col gap-[1.5rem]">
          <NotEgyptProductSection
            title="peatTitle"
            des="peatDes"
            type="peat"
            img="peat"
          />
          <div className="w-full h-[0.1rem] bg-[#E6E6E6]"></div>
          <NotEgyptProductSection
            title="mulchTitle"
            des="mulchDes"
            type="mulch"
            img="mulch"
          />
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

      <MulchAndSoilProducts
        header="soil"
        link="link"
        to="soilless-growing"
        products={products}
      />

      <div className="bg-[#E6E6E6] w-full h-[0.1rem] my-[2rem]" />

      <MulchAndSoilProducts
        header="mulch"
        link="link"
        to="mulch"
        products={products}
      />
    </div>
  );
}
