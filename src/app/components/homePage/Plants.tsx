import { useTranslations } from "next-intl";
import { UseTab } from "./UseTab";
const uses1 = ["firstUse", "secondUse"];
const uses2 = ["thirdUse", "forthUse"];
export function Plants() {
  const t = useTranslations("homePage.plantsSection");
  return (
    <div className=" p-[var(--section-Padding)] bg-[url('/home/hero.png')]  relative">
      {/* <div className="absolute top-0 left-0 h-full w-full bg-[#101010] opacity-[0.4] z-10" /> */}
      <div className="flex flex-col items-center justify-center text-[#FFFDFD] font-black leading-[5rem] z-20">
        <div className="flex flex-col items-start gap-[1rem]">
          <h1 className="text-[4rem]">{t("header")}</h1>
          <p className="text-[2rem]">{t("des")}</p>
          <h2 className="text-[4rem]">{t("secHeader")}</h2>
          <div className="flex flex-col items-start justify-center">
            <div className="flex  justify-start gap-[14.6rem]">
              {uses1.map((use) => (
                <UseTab use={t(use)} key={t(use)} />
              ))}
            </div>
            <div className="flex  justify-start gap-[12rem]">
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
