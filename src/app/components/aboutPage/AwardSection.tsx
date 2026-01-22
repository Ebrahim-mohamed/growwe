import { useTranslations } from "next-intl";
import { AwardBox } from "./AwardBox";

export function AwardSection() {
  const t = useTranslations("about.awardBox1");
  return (
    <div className="px-[var(--section-Padding)] pb-[var(--section-Padding)]  w-full">
      <h1 className="text-[3rem] text-[#E5AC71] font-bold mb-[5rem] text-center">
        {t("head")}
      </h1>
      <div className="flex items-start gap-[1rem] max-[950px]:flex-col max-[950px]:items-center max-[950px]:justify-center max-[950px]:gap-[4rem] flex-1">
        {Array.from({ length: 3 }).map((_, index) => (
          <AwardBox key={index} boxNum={index + 1} />
        ))}
      </div>
    </div>
  );
}
