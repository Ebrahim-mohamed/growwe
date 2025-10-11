import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("gardening.heroSection");
  return (
    <div className="bg-[url('/gardening/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start">
      <div>
        <h1 className="text-[5rem] text-[#E5AC71] font-bold mb-[1rem]">
          {t("title")}
        </h1>
        <div className="font-medium text-[3.5rem] text-white">
          <p className="mb-[-1rem]">{t("p1")}</p>
          <p>{t("p2")}</p>
        </div>
      </div>
    </div>
  );
}
