import { useTranslations } from "next-intl";

interface contentType {
  header: string;
  des: string;
  pras: { head: string; des: string }[];
}
export function ThirdSection(content: contentType) {
  const t = useTranslations("informationMulchAndSoil.thirdSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[#F8F9FB] flex flex-col gap-[2rem]">
      <div>
        <h1 className="text-[#E5AC71] text-[3rem] font-black mb-[1rem]">
          {t(content.header)}
        </h1>
        <p className="text-[1.8rem] text-black font-normal">{t(content.des)}</p>
      </div>
      {content.pras.map((pra) => (
        <div key={pra.head} className="text-[1.8rem]">
          <h3 className="font-black text-[#387023]">{t(pra.head)}</h3>
          <p className="font-normal text-black">{t(pra.des)}</p>
        </div>
      ))}
    </div>
  );
}
