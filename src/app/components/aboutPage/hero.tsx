import { useTranslations } from "next-intl";
import Image from "next/image";
import { mirza } from "@/app/[locale]/layout";
export function Hero() {
  const t = useTranslations("about.heroSection");
  return (
    <div className="bg-[url('/about/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative">
      <Image
        alt="leaf image"
        src="/about/leaves.png"
        width={200}
        height={200}
        className="absolute bottom-0 right-[3rem] w-[18rem] max-[700px]:hidden"
      />
      <div className={`${mirza.className} -mb-[1.5rem]`}>
        <h1 className="text-[6rem] text-[#E5AC71] font-bold -mb-[1rem]">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center gap-[1rem] font-medium text-[4rem] text-white max-[1200px]:text-[3rem] max-[480px]:text-[2.5rem] max-[400px]:text-[2rem]">
          <p>{t("natural")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white -mb-[1.2rem]"></div>
          <p>{t("sustainable")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white -mb-[1.2rem]"></div>
          <p>{t("egyptian")}</p>
        </div>
      </div>
    </div>
  );
}
