"use client";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const t = useTranslations("homePage");
  const locale = useLocale();
  return (
    <div className="bg-[url('/home/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[500px]:items-center justify-between max-[500px]:bg-right">
      <div className="flex items-center justify-between max-[500px]:flex-col max-[500px]:gap-[3rem]">
        <div className="flex items-end justify-start gap-[1rem] max-[500px]:items-center ">
          <p className=" text-[4rem]  font-black text-white leading-[5.5rem] max-[1200px]:text-[4rem] max-[1200px]:leading-[5rem] max-[500px]:text-[3rem] max-[500px]:text-center">
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
            className="w-[3.5rem] mb-[0.75rem] max-[550px]:hidden"
          />
        </div>
        <Link
          href={`/${locale}/products`}
          className="bg-[#FF0606] text-white rounded-[2.5rem] text-[2.5rem] font-bold py-[0.2rem] px-[2.5rem] mb-[0.75rem] mr-[0.75rem]"
        >
          {t("shop")}
        </Link>
      </div>
    </div>
  );
}
