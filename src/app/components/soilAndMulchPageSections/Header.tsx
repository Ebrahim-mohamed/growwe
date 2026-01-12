import { useTranslations } from "next-intl";

export function Header({ type }: { type: string }) {
  const t = useTranslations(`informationMulchAndSoil`);
  return (
    <div className=" px-[var(--section-Padding)] flex w-full flex-col justify-center items-center pt-[4rem] text-black">
      <h1
        className={`font-bold  font-[ClassicoURW] text-[4rem] max-[500px]:text-[3rem] max-[430px]:text-[2.5rem] -mb-[1rem] max-[500px]:mb-0`}
      >
        {t(`${type}Header`)}
      </h1>
      <div className="flex items-center justify-center gap-[1rem] font-normal text-[1.8rem] max-[430px]:text-[1.5rem]">
        <p>{t(`${type}Des1`)} </p>
        <p>{t(`${type}Des2`)} </p>
        <p>{t(`${type}Des3`)} </p>
      </div>
    </div>
  );
}
