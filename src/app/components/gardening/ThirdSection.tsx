import { useTranslations } from "next-intl";

export function ThirdSection() {
  const t = useTranslations("gardening.thirdSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[url('/gardening/third.jpg')]  text-white relative  items-center justify-center flex flex-col w-full min-h-[60rem] bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.6] bg-black" />
      <div className="flex flex-col gap-[2.5rem] ">
        <div className="z-20">
          <h1 className="text-[2.3rem] font-bold">{t("header1")}</h1>
          <p className="text-[1.8rem] font-normal">{t("des1")}</p>
        </div>
        <div className="z-20">
          <h1 className="text-[2.3rem] font-bold mb-[2rem]">{t("header2")}</h1>
          <div className="flex flex-col gap-[1rem]">
            {Array.from({ length: 5 }).map((_, index) => (
              <p className="text-[1.8rem] font-normal" key={index}>
                {t.rich(`point${index + 1}`, {
                  second: (chunk) => <span className="font-bold">{chunk}</span>,
                })}
              </p>
            ))}
          </div>
        </div>
        <div className="z-20 w-full flex items-center justify-end mt-[4rem] ">
          <p className="text-[2rem] font-bold ">{t("des2")}</p>
        </div>
      </div>
    </div>
  );
}
