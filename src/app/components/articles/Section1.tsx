import { useTranslations } from "next-intl";
import Image from "next/image";

export function Section1({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section1`);
  return (
    <div className="flex flex-col gap-4 w-full p-[var(--section-Padding)]">
      {articleNumber !== "3" ? (
        <div>
          <div className={`text-[2.5rem] mb-[3rem]`}>
            <h1 className="font-bold">{t("title")}</h1>
            <p className="text-[#426B1F] font-normal">{t("des")}</p>
          </div>
          <div
            className={`flex  ${
              articleNumber === "4" ? " w-[85%] " : " w-full "
            } items-start max-[1000px]:items-center justify-between gap-[6rem] text-[1.8rem] max-[700px]:flex-col max-[700px]:gap-0  `}
          >
            <p className="flex-1">{t("pra1")}</p>
            {articleNumber !== "4" && (
              <div
                className={`w-[20%] max-[700px]:w-[50%] max-[700px]:my-[1.5rem] ${
                  articleNumber === "1"
                    ? " max-[1100px]:w-[30%] "
                    : " -mt-[6rem] max-[1270px]:-mt-[3rem] "
                }`}
              >
                <Image
                  alt="article image"
                  src={`/articles/article${articleNumber}-section1.png`}
                  width={700}
                  height={700}
                  className="w-full"
                />
              </div>
            )}
          </div>
          {articleNumber === "1" && (
            <p className="text-[1.8rem] mt-[1rem]">{t("pra2")}</p>
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

          {articleNumber !== "3" && (
            <div className="w-[50%]">
              <Image
                alt="article image"
                src={`/articles/article${articleNumber}-section1.png`}
                width={700}
                height={700}
                className="w-full"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
