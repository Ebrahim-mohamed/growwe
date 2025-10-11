import { useTranslations } from "next-intl";
import { MostUseHeader } from "../MostUseHeader";
import Image from "next/image";

export function GardeningSection() {
  const t = useTranslations("gardening.gardeningSection");
  return (
    <div className="p-[var(--section-Padding)]">
      <MostUseHeader header={t("title")} des={t("des1")} />
      <div className=" flex items-center justify-between w-full gap-2 mt-[2rem]">
        <div className="text-[2.5rem] text-black flex-1">
          <h1 className="font-bold">{t("header")}</h1>
          <p className="font-normal">{t("des2")}</p>
        </div>
        <div className="w-[30%]">
          <Image
            alt="leaf image"
            src="/gardening/leaf.png"
            width={500}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
