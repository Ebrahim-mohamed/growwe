import { useTranslations } from "next-intl";
import { CertificationBox } from "./CertificationBox";
const certifications = [
  {
    title: "iso1",
    des: "quality",
    img: "cer1",
  },
  {
    title: "iso2",
    des: "environmental",
    img: "cer2",
  },
  {
    title: "omri",
    des: "organicUse",
    img: "cer3",
  },
];
export function EndSection() {
  const t = useTranslations("about.endSection");
  return (
    <div className="px-[var(--section-Padding)]  pb-[10rem] pt-[var(--section-Padding)] flex flex-col items-center justify-center">
      <h1 className="text-[#E5AC71] text-[3rem] font-bold text-center mb-[3rem]">
        {t("header")}
      </h1>
      <p className=" text-[1.8rem] text-black ">{t("pra")}</p>
    </div>
  );
}
