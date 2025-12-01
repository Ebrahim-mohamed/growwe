import { useTranslations } from "next-intl";

export function Section5({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section5`);
  return (
    <div className="p-[var(--section-Padding)] flex flex-col gap-[3rem] bg-[#FCF7F1]">
      <div>
        <h1 className=" font-bold text-[2rem]">{t("head")}</h1>
        {articleNumber === "1" && (
          <p className="text-[1.5rem]">{t("mainPra")}</p>
        )}
      </div>
      {articleNumber === "2" ? (
        <div className="flex flex-col gap-[3rem]">
          {Array.from({ length: 2 }).map((_, bigindex) => (
            <div key={bigindex} className="flex flex-col ">
              <h2 className="text-[#426B1F] font-bold text-[2rem]">
                {t(`title${bigindex + 1}`)}
              </h2>
              <p className=" text-[1.5rem]">{t(`mainPra${bigindex + 1}`)}</p>

              <div>
                {Array.from({ length: 3 }).map((_, index) => (
                  <p className=" text-[1.5rem]" key={index}>
                    {t.rich(
                      bigindex === 1 ? `pra${index + 3}` : `pra${index + 1}`,
                      {
                        second: (chunk) => (
                          <span className="font-bold">{chunk}</span>
                        ),
                      }
                    )}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-[3rem]">
          {Array.from({ length: articleNumber === "4" ? 5 : 4 }).map(
            (_, index) => (
              <div key={index} className="flex flex-col ">
                <h2 className="text-[#426B1F] font-bold text-[2rem]">
                  {t(`title${index + 1}`)}
                </h2>
                <p className=" text-[1.5rem]">{t(`pra${index + 1}`)}</p>
              </div>
            )
          )}
        </div>
      )}
      {articleNumber === "1" && (
        <div className="text-[1.5rem]">
          <p>
            {t.rich(`pra5`, {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p>
            {t.rich(`pra6`, {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
        </div>
      )}
    </div>
  );
}
