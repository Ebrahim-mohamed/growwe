import { useTranslations } from "next-intl";

export function Hero({ title }: { title: string }) {
  const t = useTranslations("informationMulchAndSoil.hero");
  return (
    <div
      className=" bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative"
      style={{ backgroundImage: `url(/mulchAndSoil/${title}-hero.png)` }}
    >
      <p className=" text-[5rem] font-black text-white leading-[6.75rem]">
        {t(title)}
      </p>
    </div>
  );
}
