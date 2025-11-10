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
    <div className="px-[var(--section-Padding)] pb-[var(--section-Padding)] flex flex-col items-center">
      <h1 className="text-[#E5AC71] text-[3rem] font-bold text-center mb-[6rem]">
        {t("title")}
      </h1>
      <div className="flex items-start max-[550px]:items-center justify-between w-full max-[550px]:flex-col max-[550px]:gap-[1.5rem] max-w-[80%]">
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
