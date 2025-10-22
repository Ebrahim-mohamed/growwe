import { useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("contact.heroSection");
  return (
    <div className="bg-[url('/contact/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative">
      {/* <Image
        alt="arrow image"
        src="/contact/arrow.png"
        width={500}
        height={500}
        className="w-[70rem] absolute top-0 left-0 z-30"
      /> */}
      <p className=" text-[5rem] font-black text-white leading-[6.75rem]">
        {t("title")}
      </p>
    </div>
  );
}
