"use client";
import { useTranslations } from "next-intl";

export function Hero({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.heroSection`);

  return (
    <div
      className="bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[500px]:items-center justify-between "
      style={{ backgroundImage: `url(/articles/hero${articleNumber}.png)` }}
    >
      <div className="flex items-end justify-between max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-[3rem] w-full -mb-[1.5rem]">
        <div className={` max-[500px]:text-center`}>
          <h1 className="text-[4rem] text-white font-bold -mb-[1rem] ">
            {t("title")}
          </h1>
          <div className="font-normal text-[2.5rem] text-white">
            <p className="mb-[-1rem]">{t("des")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
