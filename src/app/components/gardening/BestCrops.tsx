import { useTranslations } from "next-intl";
import { CropCard } from "./CropCard";
const crops = ["tomatoes", "peppers", "strawberries", "grgr", "cucumbers"];
export function BestCrops() {
  const t = useTranslations("gardening.crops");
  return (
    <div className="p-[var(--section-Padding)] w-full bg-[#FCF7F1]">
      <div className="text-black text-[3rem] font-bold text-center mb-[4rem]">
        <h1>{t("header")}</h1>
        <h1>{t("header2")}</h1>
      </div>
      <div className="flex gap-6 items-center justify-center">
        {crops.map((crop) => (
          <CropCard key={crop} cropName={t(crop)} img={crop} />
        ))}
      </div>
    </div>
  );
}
