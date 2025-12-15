import { useTranslations } from "next-intl";
import Image from "next/image";

export function AwardBox({ boxNum }: { boxNum: number }) {
  const t = useTranslations(`about.awardBox${boxNum}`);
  return (
    <div className="flex gap-[0.5rem] items-center justify-center">
      <div>
        <Image
          alt="image"
          src={`/about/awardLeft.png`}
          width={200}
          height={500}
          className="h-full"
        />
      </div>
      <div className="flex flex-col gap-[0.5rem] items-center justify-start text-black min-w-[28rem]">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">{t("year")}</h1>
          <p className="text-[1rem]">{t("prize")}</p>
          <p className="text-[0.8rem]">{t("prize2")}</p>
        </div>
        <div className="w-full h-[0.2rem] bg-black"></div>
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold">
            {t.rich("pra", { second: (chunk) => <div>{chunk}</div> })}
          </h1>
          {boxNum !== 3 && <p className="text-[0.8rem]">{t("subPra")}</p>}
        </div>
      </div>
      <div>
        <Image
          alt="image"
          src={`/about/awardRight.png`}
          width={200}
          height={500}
          className="h-full"
        />
      </div>
    </div>
  );
}
