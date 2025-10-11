import { useTranslations } from "next-intl";
import { MulchPrag } from "./MulchPrag";
const features = [
  { title: "feat1" },
  { title: "feat2" },
  { title: "feat3" },
  { title: "feat4" },
  { title: "feat5" },
];
export function MulchFeatures() {
  const t = useTranslations("homePage.mulch");
  return (
    <div className="p-[var(--section-Padding)] bg-[url('/home/mulch.png')] w-full flex items-center justify-center">
      <div className="flex items-center justify-center w-full">
        <div className="max-w-[25rem] text-[#FFFDFD] text-[4rem] font-black">
          {t("features")}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center gap-[2rem] w-full p-8 relative ">
        <div className="bg-[#101010] opacity-[0.35] absolute top-0 left-0 w-[80%] h-full rounded-[1rem]"></div>
        {features.map((feat) => (
          <MulchPrag pra={t(feat.title)} key={feat.title} />
        ))}
      </div>
    </div>
  );
}
