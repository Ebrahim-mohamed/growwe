import { useTranslations } from "next-intl";
import Image from "next/image";

export function Partners() {
  const t = useTranslations("homePage.partnersSection");
  return (
    <div className=" flex items-start justify-center gap-4 p-[var(--section-Padding)] bg-[#F8FFF5]">
      <div className="w-[40%]">
        <Image
          alt="partners images"
          src="/home/partners.png"
          width={300}
          height={300}
          className="max-w-[18rem] w-[100%] aspect-[289/285]"
        />
      </div>
      <div>
        <h1 className="text-[2.5rem] text-[#387023] font-black mb-[2rem] max-[1200px]:text-[2.2rem] max-[1000px]:text-[2rem]">
          {t("header")}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="text-[1.5rem] text-black font-medium">{t("firstP")}</p>
          <p className="text-[1.5rem] text-black font-medium">{t("secondP")}</p>
          <div className="flex items-center w-full justify-between">
            <p className="text-[1.5rem] text-black font-black">{t("thirdP")}</p>
            <button className="bg-black text-white text-[1rem] flex items-start justify-center p-[1rem] rounded-[1rem] hover:cursor-pointer">
              {t("button")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
