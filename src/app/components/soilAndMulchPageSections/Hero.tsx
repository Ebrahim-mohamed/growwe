"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero({ title }: { title: string }) {
  const t = useTranslations("informationMulchAndSoil.hero");
  const locale = useLocale();
  const [isEgypt, setIsEgypt] = useState(false);
  useEffect(() => {
    async function checkIfEgypt() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        console.log(data);
        const isEgypt = data.country_name === "Egypt";
        // setIsEgypt(isEgypt);
        console.log("Is user in Egypt?", isEgypt);
      } catch (error) {
        console.log("Failed to detect location");
      }
    }

    checkIfEgypt();
  }, []);
  return (
    <div
      className=" bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[500px]:items-center justify-between  relative"
      style={{ backgroundImage: `url(/mulchAndSoil/${title}-hero.png)` }}
    >
      <div className="flex items-end justify-between max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-[3rem] w-full -mb-[1.5rem]">
        <p
          className={` text-[5rem] font-black text-white font-[ClassicoURW] mb-[-1rem] max-[500px]:text-center`}
        >
          {t(title)}
        </p>
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
