import { useTranslations } from "next-intl";
import Image from "next/image";
import { SmarterBox } from "./SmarterBox";

const smarterBox = [
  {
    header: "smartFirstBoxHeader",
    des: "smartFirstBoxDescription",
    img: "First",
  },
  {
    header: "smartSecondBoxHeader",
    des: "smartSecondBoxDescription",
    img: "Second",
  },
  {
    header: "smartThirdBoxHeader",
    des: "smartThirdBoxDescription",
    img: "Third",
  },
];
const smarterBox2 = [
  {
    header: "smartFourthBoxHeader",
    des: "smartFourthBoxDescription",
    img: "Fourth",
  },
  {
    header: "smartFifthBoxHeader",
    des: "smartFifthBoxDescription",
    img: "Fifth",
  },
  {
    header: "smartSixthBoxHeader",
    des: "smartSixthBoxDescription",
    img: "Sixth",
  },
];

export function Smarter() {
  const t = useTranslations("homePage.smartSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] relative overflow-hidden">
      <Image
        alt="planet image"
        src="/home/smartIcon.png"
        width={500}
        height={500}
        className="absolute top-0 left-0 w-[13rem] max-[700px]:hidden"
      />
      <h1 className="text-[#387023] text-[3rem] font-black mb-20 text-center">
        {t("smarterTitle")}
      </h1>
      <div className="flex flex-col gap-[2rem] items-center justify-center">
        <div className="flex  gap-[2rem] justify-between items-center w-full">
          {smarterBox.map((box) => (
            <SmarterBox
              des={t(box.des)}
              header={t(box.header)}
              img={box.img}
              key={t(box.header)}
            />
          ))}
        </div>
        <div className="flex gap-[2rem]  justify-between items-center w-full">
          {smarterBox2.map((box) => (
            <SmarterBox
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
