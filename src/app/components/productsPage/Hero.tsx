import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("products.heroSection");
  return (
    <div className="bg-[url('/products/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start">
      <div>
        <h1 className="text-[5rem] text-[#E5AC71] font-bold mb-[1rem]">
          {t("title")}
        </h1>
        <div className="flex items-center justify-center gap-[1rem] font-medium text-[4rem] text-white max-[1200px]:text-[3rem]">
          <p>{t("premium")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
          <p>{t("efficient")}</p>
          <div className="w-[1rem] h-[1rem] rounded-full bg-white"></div>
          <p>{t("cost")}</p>
        </div>
      </div>
    </div>
  );
}
