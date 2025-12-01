import { useTranslations } from "next-intl";

export function Section4({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section4`);
  return (
    <div
      className="p-[var(--section-Padding)] bg-cover relative h-[40rem] flex items-center bg-bottom"
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
      {articleNumber === "2" && (
        <div className="relative z-50 text-white flex flex-col gap-[2rem]">
          <div>
            <h1 className="font-bold text-[2rem] ">{t("title1")}</h1>
            <ul className="list-disc pl-8">
              {Array.from({ length: 4 }).map((_, index) => (
                <li key={index} className=" text-[1.8rem] ">
                  {t(`point${index + 1}`)}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="font-bold text-[2rem] ">{t("title2")}</h1>
            <ul className="list-disc pl-8">
              {Array.from({ length: 5 }).map((_, index) => (
                <li key={index} className=" text-[1.8rem] ">
                  {t(`point${index + 4}`)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
