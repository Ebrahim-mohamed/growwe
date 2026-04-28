import { useTranslations } from "next-intl";
import Image from "next/image";

export function AwardBox({ boxNum }: { boxNum: number }) {
  const t = useTranslations(`about.awardBox${boxNum}`);
  return (
    <div className="flex gap-[0.5rem] items-center justify-center relative w-full min-h-[20rem]">
      <Image
        alt="image"
        src={`/about/awardLeft.png`}
        width={200}
        height={500}
        className="w-[4rem]  absolute top-1/2 -translate-y-1/2 left-0 max-[1350px]:w-[2.5rem] max-[1200px]:w-[2rem] max-[1000px]:w-[4.5rem] max-[420px]:hidden "
      />

      <div className="flex flex-col gap-[0.5rem] items-center justify-start text-black ">
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold max-[1000px]:text-[2rem]">
            {t("year")}
          </h1>
          <p className="text-[1rem] max-[1000px]:text-[1.5rem]">{t("prize")}</p>
          <p className="text-[0.8rem] max-[1000px]:text-[1.5rem]">
            {t("prize2")}
          </p>
        </div>
        <div className="w-[70%] h-[0.05rem] bg-black"></div>
        <div className="text-center">
          <h1 className="text-[1.5rem] font-bold max-[1000px]:text-[2rem]">
            {t.rich("pra", { second: (chunk) => <div>{chunk}</div> })}
          </h1>
          {boxNum !== 3 && (
            <p className="text-[0.8rem] max-[1000px]:text-[1.5rem]">
              {t("subPra")}
            </p>
          )}
        </div>
      </div>

      <Image
        alt="image"
        src={`/about/awardRight.png`}
        width={200}
        height={500}
        className="w-[4rem] absolute top-1/2 -translate-y-1/2 right-0 max-[1350px]:w-[2.5rem] max-[1200px]:w-[2rem] max-[1000px]:w-[4.5rem] max-[420px]:hidden "
      />
    </div>
  );
}
