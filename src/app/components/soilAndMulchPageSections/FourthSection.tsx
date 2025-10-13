import { useTranslations } from "next-intl";
import { FourthSectionBox } from "./FourthSectionBox";

interface contentType {
  header: string;
  attachedHeader: string;
  boxes1: { header: string; img: string; des: string }[];
  boxes2: { header: string; img: string; des: string }[];
}
export function FourthSection(content: contentType) {
  const t = useTranslations("informationMulchAndSoil.fourthSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1]  overflow-hidden">
      <div className="relative text-[#387023] text-[3rem] font-black">
        <h2 className="absolute -top-[80%] left-[12%]">
          {t(content.attachedHeader)}
        </h2>
        <h1 className=" mb-20 text-center">{t(content.header)}</h1>
      </div>
      <div className="flex flex-col gap-[2rem] items-center justify-center">
        <div className="flex  gap-[2rem] justify-between items-center w-full">
          {content.boxes1.map((box) => (
            <FourthSectionBox
              des={t(box.des)}
              header={t(box.header)}
              img={box.img}
              key={t(box.header)}
            />
          ))}
        </div>
        <div className="flex gap-[2rem]  justify-between items-center w-full">
          {content.boxes2.map((box) => (
            <FourthSectionBox
              des={t(box.des)}
              header={t(box.header)}
              img={box.img}
              key={t(box.header)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
