import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("cart.heroSection");
  return (
    <div className="bg-[url('/cart/hero.webp')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start">
      <div className={`font-[ClassicoURW] -mb-[1.5rem]`}>
        <h1 className="text-[5rem] text-white font-bold -mb-[1rem]">
          {t("title")}
        </h1>
      </div>
    </div>
  );
}
