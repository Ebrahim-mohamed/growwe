"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Hero() {
  const t = useTranslations("homePage");
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
    <div className="bg-[url('/home/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[1000px]:items-center justify-between max-[500px]:bg-right">
      <div className="flex items-end justify-between max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-[3rem] w-full">
        <div className="flex items-end justify-start gap-[1rem] max-[1000px]:items-center ">
          <p className=" text-[4rem] max-[1000px]:text-[3.5rem]  font-black text-white leading-[5.5rem] max-[1200px]:text-[4rem] max-[1200px]:leading-[5rem] max-[500px]:text-[3rem] max-[1000px]:text-center">
            {t("title")
              .split(" | ")
              .map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && <br />}
                </span>
              ))}
          </p>
          <Image
            alt="image"
            width={100}
            height={100}
            src="/leaves.png"
            className="w-[3.5rem] mb-[0.75rem] max-[1000px]:hidden"
          />
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
