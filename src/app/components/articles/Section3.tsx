import { useTranslations } from "next-intl";

export function Section3({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section3`);
  return (
    <div className="p-[var(--section-Padding)] flex flex-col gap-[3.5rem]">
      {articleNumber === "4" || articleNumber === "2" ? (
        <div>
          <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
            {t("title1")}
          </h1>
          {articleNumber === "2" && (
            <p className="text-[2rem]">{t("mainPra")}</p>
          )}
          <ul className="list-disc pl-8">
            {Array.from({
              length: articleNumber === "4" ? 5 : 4,
            }).map((_, index) => (
              <li key={index} className="text-[1.8rem] ">
                {t.rich(`point${index + 1}`, {
                  second: (chunk) => <span className="font-bold">{chunk}</span>,
                })}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
            {t("title1")}
          </h1>
          <p className="text-[1.8rem]">{t("pra1")}</p>
        </div>
      )}
      <div>
        <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
          {t("title2")}
        </h1>
        {articleNumber === "2" && (
          <p className="text-[2rem]">{t("mainPra2")}</p>
        )}
        <ul className="list-disc pl-8">
          {Array.from({
            length:
              articleNumber === "1"
                ? 5
                : articleNumber === "4"
                ? 4
                : articleNumber === "2"
                ? 3
                : 4,
          }).map((_, index) => (
            <li key={index} className="text-[1.8rem] ">
              {t.rich(
                `point${
                  articleNumber === "2"
                    ? index + 5
                    : articleNumber === "4"
                    ? index + 6
                    : index + 1
                }`,
                {
                  second: (chunk) => <span className="font-bold">{chunk}</span>,
                }
              )}
            </li>
          ))}
        </ul>
      </div>
      {articleNumber === "1" && (
        <div>
          <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
            {t("title3")}
          </h1>
          <p className="text-[1.8rem]">{t("pra2")}</p>
        </div>
      )}
    </div>
  );
}
