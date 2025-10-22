import { useTranslations } from "next-intl";
import { CropCard } from "./CropCard";
const crops = ["tomatoes", "peppers", "strawberries", "lettuce", "cucumbers"];
export function BestCrops() {
  const t = useTranslations("gardening.crops");
  return (
    <div className="p-[var(--section-Padding)] w-full bg-[#FCF7F1] pb-[10rem]">
      <div className="text-black text-[3rem] font-bold text-center mb-[4rem]">
        <h1>{t("header")}</h1>
        <h1>{t("header2")}</h1>
      </div>
      <div className="grid grid-cols-5 gap-6 items-center justify-center  max-[1050px]:grid-cols-3">
        {crops.map((crop) => (
          <CropCard key={crop} cropName={t(crop)} img={crop} />
        ))}
      </div>
    </div>
  );
}
