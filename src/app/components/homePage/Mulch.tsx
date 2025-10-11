import { useTranslations } from "next-intl";
import Image from "next/image";

export function Mulch() {
  const t = useTranslations("homePage.mulch");
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1]  text-black w-full">
      <h1 className="text-[3rem] font-bold text-center text-[#E5AC71]">
        {t("title")}
      </h1>
      <p className="text-[1.8rem] mb-[1rem] text-center">{t("des")}</p>
      <div className="flex items-center gap-2 w-full justify-between">
        <p className="text-[2rem]">{t("content")}</p>
        <Image
          alt="mulch image"
          width={500}
          height={500}
          src="/home/mulchFeatures.png"
          className="w-[80%]"
        />
      </div>
    </div>
  );
}
