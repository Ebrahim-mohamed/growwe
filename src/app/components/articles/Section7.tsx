import { useTranslations } from "next-intl";

export function Section7({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section7`);
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] flex flex-col gap-[3.5rem]">
      <div>
        <h1 className="text-[#426B1F] text-[2.5rem] font-bold">{t("head")}</h1>
      </div>
      <div className="flex flex-col gap-[1.5rem]">
        {Array.from({
          length: articleNumber === "1" ? 11 : 4,
        }).map((_, index) => (
          <div key={index}>
            <p className="text-[1.8rem] font-bold">
              {" "}
              Q{index + 1} : {t(`title${index + 1}`)}
            </p>
            <p className="text-[1.8rem] ">{t(`pra${index + 1}`)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
