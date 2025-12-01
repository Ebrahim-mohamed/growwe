import { useTranslations } from "next-intl";

export function Section2({ articleNumber }: { articleNumber: string }) {
  const t = useTranslations(`template${articleNumber}.section2`);
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] flex flex-col gap-[3.5rem]">
      <div>
        <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
          {t("title1")}
        </h1>
        <p className="text-[1.8rem]">{t("pra1")}</p>
      </div>
      <div>
        <h1 className="text-[#426B1F] text-[2.5rem] font-bold">
          {t("title2")}
        </h1>
        <ul className="list-disc pl-8">
          {Array.from({
            length:
              articleNumber === "1" || articleNumber === "4"
                ? 5
                : articleNumber === "2"
                ? 7
                : 4,
          }).map((_, index) => (
            <li key={index} className="text-[1.8rem] ">
              {t.rich(`point${index + 1}`, {
                second: (chunk) => <span className="font-bold">{chunk}</span>,
              })}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
