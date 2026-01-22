"use client";
import { useLocale, useTranslations } from "next-intl";

import Link from "next/link";
import { useEffect, useState } from "react";
export function Hero() {
  const t = useTranslations("horticulture.heroSection");
  const locale = useLocale();
  const [isEgypt, setIsEgypt] = useState(true);
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
  return (
    <div className="bg-[url('/horticulture/hero.webp')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[1000px]:items-center justify-between ">
      <div className="flex items-end justify-between max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-[3rem] w-full -mb-[1.5rem]">
        <div className={`font-[ClassicoURW] max-[500px]:text-center`}>
          <h1 className="text-[5rem] text-white font-bold -mb-[1rem] ">
            {t("title")}
          </h1>
          {/* <div className="font-medium text-[3.5rem] text-white">
            <p className="mb-[-1rem]">{t("p")}</p>
          </div> */}
        </div>
        {isEgypt ? (
          <Link
            href={`/${locale}/products`}
            className="bg-[#FF0606] text-white rounded-[2.5rem] text-[2.3rem] font-bold py-[0.2rem] px-[1.5rem] mb-[0.75rem] mr-[0.75rem]"
          >
            {t("shop")}
          </Link>
        ) : (
          <Link
            href={`/${locale}/contact`}
            className="bg-[#FF0606] text-white rounded-[2.5rem] text-[2.3rem] font-bold py-[0.2rem] px-[1.5rem] mb-[0.75rem] mr-[0.75rem]"
          >
            {t("quote")}
          </Link>
        )}
      </div>
    </div>
  );
}
