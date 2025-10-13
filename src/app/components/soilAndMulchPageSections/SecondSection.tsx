import { useTranslations } from "next-intl";
import Image from "next/image";
import { PartTowInSecondSection } from "./PartTowInSecondSection";

export function SecondSection({
  img,
  title,
  pra1,
  pra2,
  firstBoxes,
  secondBoxes,
  mainPraForPartTow,
  mainDesForPartTow,
}: {
  img: string;
  title: string;
  pra1: string;
  pra2?: string;
  mainPraForPartTow: string;
  mainDesForPartTow: string;
  firstBoxes: string[];
  secondBoxes: string[];
}) {
  const t = useTranslations("informationMulchAndSoil.secondSection");
  return (
    <div className="p-[var(--section-Padding)]   text-black w-full">
      <h1 className="text-[4rem] font-bold  text-[#E5AC71] max-w-[35rem]">
        {t(title)}
      </h1>
      <div>
        <div className="flex items-center gap-2 w-full justify-between">
          <p className="text-[1.6rem]">{t(pra1)}</p>
          <Image
            alt="mulch image"
            width={500}
            height={500}
            src={`/mulchAndSoil/${img}.png`}
            className="w-full"
          />
        </div>
        {pra2 && <p className="text-[1.6rem]">{t(pra2)}</p>}
      </div>
      <PartTowInSecondSection
        header="advantages"
        mainPra={mainPraForPartTow}
        des={mainDesForPartTow}
        boxes1={firstBoxes}
        boxes2={secondBoxes}
      />
    </div>
  );
}
