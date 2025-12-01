import { useTranslations } from "next-intl";
import Image from "next/image";

export function Section1({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section1`);
  return (
    <div className="flex flex-col gap-4 w-full p-[var(--section-Padding)]">
      {articleNumber !== "3" ? (
        <div>
          <div className="text-[2.5rem]">
            <h1 className="font-bold">{t("title")}</h1>
            <p className="text-[#426B1F] font-normal">{t("des")}</p>
          </div>
          <div className="flex w-full items-center justify-between gap-4 text-[1.8rem]">
            <p className="flex-1">{t("pra1")}</p>
            <div className="w-[35%]">
              <Image
                alt="article image"
                src={`/articles/article${articleNumber}-section1.png`}
                width={700}
                height={700}
                className="w-full"
              />
            </div>
          </div>
          {articleNumber === "1" && (
            <p className="text-[1.8rem]">{t("pra2")}</p>
          )}
        </div>
      ) : (
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-[2rem]">
            <div className="text-[2.5rem]">
              <h1 className="font-bold">{t("title")}</h1>
              <p className="text-[#426B1F] font-normal">{t("des")}</p>
            </div>
            <div className="text-[1.8rem] flex flex-col gap-[2rem]">
              <p className="flex-1">
                {t.rich("pra1", {
                  second: (chunk) => <span className="font-bold">{chunk}</span>,
                })}
              </p>
              <p className="text-[1.8rem]">{t("pra2")}</p>
            </div>
          </div>

          <div className="w-[50%]">
            <Image
              alt="article image"
              src={`/articles/article${articleNumber}-section1.png`}
              width={700}
              height={700}
              className="w-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
