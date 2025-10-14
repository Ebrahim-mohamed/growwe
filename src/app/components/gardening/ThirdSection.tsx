import { useTranslations } from "next-intl";

export function ThirdSection() {
  const t = useTranslations("gardening.thirdSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[url('/gardening/hero.png')] flex flex-col text-white relative gap-[1rem]">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.6] bg-[#101010]" />
      <div className="z-20">
        <h1 className="text-[2rem] font-bold">{t("header1")}</h1>
        <p className="text-[1.5rem] font-normal">{t("des1")}</p>
      </div>
      <div className="z-20">
        <h1 className="text-[2rem] font-bold">{t("header2")}</h1>
        <p className="text-[1.5rem] font-normal">1.{t("point1")}</p>
        <p className="text-[1.5rem] font-normal">2.{t("point2")}</p>
        <p className="text-[1.5rem] font-normal">3.{t("point3")}</p>
        <p className="text-[1.5rem] font-normal">4.{t("point4")}</p>
        <p className="text-[1.5rem] font-normal">5.{t("point5")}</p>
      </div>
      <div className="z-20">
        <h1 className="text-[2rem] font-bold">{t("header3")}</h1>
        <p className="text-[1.5rem] font-normal">{t("des2")}</p>
      </div>
    </div>
  );
}
