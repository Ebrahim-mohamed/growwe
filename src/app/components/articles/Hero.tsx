"use client";
import { useTranslations } from "next-intl";

export function Hero({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.heroSection`);

  return (
    <div
      className="bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[1000px]:items-center justify-between "
      style={{ backgroundImage: `url(/articles/hero${articleNumber}.png)` }}
    >
      <div className="flex items-end justify-between max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:gap-[3rem] w-full -mb-[1.5rem]">
        <div className={` max-[1000px]:text-center`}>
          <h1 className="text-[4rem] m text-white font-bold -mb-[1rem] max-[800px]:mb-0">
            {t("title")}
          </h1>
          <div className="font-normal text-[2.5rem]   text-white">
            <p className="mb-[-1rem] ">{t("des")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
