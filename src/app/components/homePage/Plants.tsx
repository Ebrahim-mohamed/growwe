import { useTranslations } from "next-intl";
import { UseTab } from "./UseTab";
import Image from "next/image";
const uses1 = ["firstUse", "thirdUse"];
const uses2 = ["secondUse", "forthUse"];
export function Plants() {
  const t = useTranslations("homePage.plantsSection");
  return (
    <div className=" p-[var(--section-Padding)] bg-[url('/home/hero.png')]  relative">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-[#101010] opacity-[0.4] z-10" /> */}
      <Image
        alt="flower image"
        src="/home/leaves.png"
        width={300}
        height={300}
        className="w-[30rem] absolute bottom-0 right-0"
      />
      <div className="flex flex-col items-center justify-center text-[#FFFDFD] font-black leading-[5rem] z-20">
        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="text-[4rem]">{t("header")}</h1>
          <p className="text-[2rem]">{t("des")}</p>
          <h2 className="text-[4rem]">{t("secHeader")}</h2>
          <div className="flex items-start justify-around w-full">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              {uses1.map((use) => (
                <UseTab use={t(use)} key={t(use)} />
              ))}
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              {uses2.map((use) => (
                <UseTab use={t(use)} key={t(use)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
