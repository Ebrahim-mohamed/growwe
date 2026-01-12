import { useLocale, useTranslations } from "next-intl";
import { FourthSectionBox } from "./FourthSectionBox";

interface contentType {
  header: string;
  attachedHeader: string;
  boxes: { header: string; img: string; des: string }[];
}
export function FourthSection(content: contentType) {
  const t = useTranslations("informationMulchAndSoil.fourthSection");
  const locale = useLocale();
  return (
    <div className="p-[var(--section-Padding)] bg-[#FCF7F1]  overflow-hidden">
      {content.header === "soilHeader" ? (
        <div className="relative text-[#387023] text-[3rem] font-black">
          <h2
            className={`absolute -top-[80%] ${
              locale === "en" ? " left-[18%] " : " right-[18%] "
            }`}
          >
            {t(content.attachedHeader)}
          </h2>
          <h1 className=" mb-20 text-center">
            {t.rich(content.header, {
              second: (chunk) => (
                <span className="italic text-[#E5AC71]">{chunk}</span>
              ),
            })}
          </h1>
        </div>
      ) : (
        <div className="relative text-[#387023] text-[3rem] font-black">
          <h2 className="text-center">{t(content.header)}</h2>
          <h1
            className={` mb-20 ${
              locale === "en"
                ? " ml-[45rem] max-[1300px]:ml-[35rem] max-[1000px]:ml-0 "
                : " mr-[45rem] max-[1300px]:mr-[35rem] max-[1000px]:mr-0 "
            } text-center`}
          >
            {t.rich(content.attachedHeader, {
              second: (chunk) => (
                <span className="italic text-[#E5AC71]">{chunk}</span>
              ),
            })}
          </h1>
        </div>
      )}
      <div className="flex flex-col gap-[2rem] items-center justify-center">
        <div className="grid grid-cols-3 max-[1000px]:grid-cols-2  gap-[2rem] justify-between items-start max-[1000px]:items-center w-full">
          {content.boxes.map((box) => (
            <FourthSectionBox
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
