import { useTranslations } from "next-intl";
import Image from "next/image";
import { SmarterBox } from "./SmarterBox";

const smarterBox = [
  {
    header: "smartFirstBoxHeader",
    des: "smartFirstBoxDescription",
    img: "Second",
  },
  {
    header: "smartSecondBoxHeader",
    des: "smartSecondBoxDescription",
    img: "First",
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
    img: "Fifth",
  },
  {
    header: "smartFifthBoxHeader",
    des: "smartFifthBoxDescription",
    img: "Fourth",
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
        className="absolute top-0 left-0 w-[20rem] max-[700px]:hidden"
      />
      <h1 className="text-[#387023] text-[3rem] font-black mb-20 text-center">
        {t.rich("smarterTitle", {
          second: (chunk) => (
            <span className="text-[#E5AC71] italic">{chunk}</span>
          ),
        })}
      </h1>
      <div className="flex flex-col gap-[2rem] items-center justify-center">
        <div className="flex  gap-[1rem] justify-start items-start w-full">
          {smarterBox.map((box) => (
            <SmarterBox
              des={t(box.des)}
              header={t(box.header)}
              img={box.img}
              key={t(box.header)}
            />
          ))}
        </div>
        <div className="flex gap-[1rem]  justify-start items-start w-full">
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
