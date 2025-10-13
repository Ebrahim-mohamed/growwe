import { PartTowInSecondSectionType } from "@/app/types/types";
import { SecondSectionBox } from "./SecondSectionBox";
import { useTranslations } from "next-intl";

export function PartTowInSecondSection(data: PartTowInSecondSectionType) {
  const t = useTranslations("informationMulchAndSoil.secondSection");
  return (
    <div className="mt-[1.5rem]">
      <h1 className="text-[#E5AC71] text-[3rem] font-black mb-[4rem]">
        {t(data.header)}
      </h1>
      <div className="flex w-full items-stretch gap-3">
        {data.boxes1.map((box) => (
          <SecondSectionBox text={t(box)} key={box} />
        ))}
      </div>
      <div className="flex gap-3 w-full items-center mt-[2.5rem]">
        <div className="flex-1 text-[#387023]">
          <h3 className="text-[2.4rem] font-black ">{t(data.mainPra)}</h3>
          <p className="text-[1.8rem] font-medium">{t(data.des)}</p>
        </div>
        <div className="flex items-stretch gap-3 flex-1">
          {data.boxes2.map((box) => (
            <SecondSectionBox text={t(box)} key={box} />
          ))}
        </div>
      </div>
    </div>
  );
}
