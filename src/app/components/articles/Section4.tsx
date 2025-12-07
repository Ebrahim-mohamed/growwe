import { useTranslations } from "next-intl";

export function Section4({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section4`);
  return (
    <div
      className="p-[var(--section-Padding)] bg-cover relative min-h-[40rem] flex items-center bg-bottom"
      style={{
        backgroundImage: `url(/articles/section4-${articleNumber}.png)`,
      }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[#0006]"></div>
      {articleNumber === "1" && (
        <div className="relative z-50 text-white">
          <h1 className="font-bold text-[2rem] ">{t("title1")}</h1>
          {Array.from({ length: 3 }).map((_, index) => (
            <p key={index} className=" text-[1.8rem] ">
              {t(`pra${index + 1}`)}
            </p>
          ))}
        </div>
      )}
      {(articleNumber === "2" ||
        articleNumber === "5" ||
        articleNumber === "3" ||
        articleNumber === "4" ||
        articleNumber === "6") && (
        <div
          className={`relative z-50 text-white flex ${
            articleNumber === "4"
              ? " justify-center gap-[5rem] w-full "
              : " flex-col gap-[2rem] "
          } `}
        >
          <div>
            <h1 className="font-bold text-[2rem] ">{t("title1")}</h1>
            <ul className="list-disc pl-8">
              {Array.from({
                length: articleNumber === "5" || articleNumber === "6" ? 5 : 4,
              }).map((_, index) => (
                <li key={index} className=" text-[1.8rem] ">
                  {t(`point${index + 1}`)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-[2rem] ">{t("title2")}</h1>
            <ul className="list-disc pl-8">
              {Array.from({
                length:
                  articleNumber === "5" ||
                  articleNumber === "6" ||
                  articleNumber === "4"
                    ? 4
                    : articleNumber === "3"
                    ? 3
                    : 5,
              }).map((_, index) => (
                <li key={index} className=" text-[1.8rem] ">
                  {t(
                    `point${
                      articleNumber === "5" ||
                      articleNumber === "6" ||
                      articleNumber === "4"
                        ? index + 6
                        : articleNumber === "3"
                        ? index + 5
                        : index + 4
                    }`
                  )}
                </li>
              ))}
            </ul>
          </div>
          {(articleNumber === "5" ||
            articleNumber === "6" ||
            articleNumber === "3") && (
            <div>
              <h1 className="font-bold text-[2rem] ">{t("title3")}</h1>
              <ul className="list-disc pl-8">
                {Array.from({ length: 5 }).map((_, index) => (
                  <li key={index} className=" text-[1.8rem] ">
                    {t.rich(
                      `point${articleNumber === "3" ? index + 8 : index + 10}`,
                      {
                        second: (chunk) => (
                          <span className="font-bold">{chunk}</span>
                        ),
                      }
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
