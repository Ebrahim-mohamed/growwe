"use client";
import { useTranslations } from "next-intl";

export function Section6({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section6`);

  return (
    <div
      className="bg-cover  p-[var(--section-Padding)]  text-white relative"
      style={{
        backgroundImage: `url(/articles/section6-${articleNumber}.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#00000099] z-30"></div>

      <h1 className="text-[3.5rem] font-bold z-50">{t("title")}</h1>
      <p className="text-[2.5rem] z-50">{t("pra")}</p>
    </div>
  );
}
