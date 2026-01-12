import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { SmarterBox } from "./SmarterBox";
import Link from "next/link";

const smarterBoxes = [
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
  const locale = useLocale();
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1] relative overflow-hidden">
      <Image
        alt="planet image"
        src="/home/smartIcon.svg"
        width={500}
        height={500}
        className="absolute top-0 left-0 w-[15rem] max-[1000px]:hidden"
      />
      <h1 className="text-[#387023] text-[3rem] font-black mb-20 text-center">
        {t.rich("smarterTitle", {
          second: (chunk) => (
            <span className="text-[#E5AC71] italic">{chunk}</span>
          ),
        })}
        <Link
          href={`/${locale}/soilless-growing`}
          className="text-[1.5rem] text-[#5B5757] font-normal"
        >
          {t("know")}
        </Link>
      </h1>
      <div className="flex flex-col gap-[2rem] items-center justify-center">
        <div className="grid grid-cols-3 max-[1000px]:grid-cols-2  gap-[2rem] justify-between items-start max-[1000px]:items-center w-full">
          {smarterBoxes.map((box) => (
            <SmarterBox
              des={t.rich(box.des, { second: (chunk) => <div>{chunk}</div> })}
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
