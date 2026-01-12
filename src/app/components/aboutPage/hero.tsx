import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

export function Hero() {
  const t = useTranslations("about.heroSection");
  const locale = useLocale();
  return (
    <div className="bg-[url('/about/hero.webp')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative bg-center   max-[1000px]:items-center max-[1000px]:justify-center ">
      <Image
        alt="leaf image"
        src="/about/leaves.png"
        width={200}
        height={200}
        className={`absolute bottom-0 ${
          locale === "en" ? " right-[3rem] " : " left-[3rem] "
        } w-[18rem] max-[1000px]:hidden`}
      />
      <div className={`font-[ClassicoURW] -mb-[1.5rem]  `}>
        <h1 className="text-[5rem]  text-white font-bold -mb-[1rem]">
          {t("title")}
        </h1>
        {/* <div className="flex items-center justify-center gap-[1rem] font-medium text-[4rem] text-white max-[1200px]:text-[3rem] max-[480px]:text-[2.5rem] max-[400px]:text-[2rem]">
          <p>{t("natural")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white -mb-[1.2rem]"></div>
          <p>{t("sustainable")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white -mb-[1.2rem]"></div>
          <p>{t("egyptian")}</p>
        </div> */}
      </div>
    </div>
  );
}
