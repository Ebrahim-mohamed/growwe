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
export function Certification() {
  const t = useTranslations("about.certificationSection");
  return (
    <div className="p-[var(--section-Padding)]">
      <h1 className="text-[#E5AC71] text-[3rem] font-bold text-center mb-[4rem]">
        {t("title")}
      </h1>
      <div className="flex items-center justify-between w-full">
        {certifications.map((cer) => (
          <CertificationBox
            header={t(cer.title)}
            des={t(cer.des)}
            img={cer.img}
            key={cer.title}
          />
        ))}
      </div>
    </div>
  );
}
