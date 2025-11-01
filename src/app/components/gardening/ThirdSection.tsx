import { useTranslations } from "next-intl";

export function ThirdSection() {
  const t = useTranslations("gardening.thirdSection");
  return (
    <div className="p-[var(--section-Padding)] bg-[url('/gardening/hero.png')]  text-white relative  items-center flex flex-col w-full">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.6] bg-[#101010]" />
      <div className="flex flex-col gap-[2.5rem] ">
        <div className="z-20">
          <h1 className="text-[2rem] font-bold">{t("header1")}</h1>
          <p className="text-[1.5rem] font-normal">{t("des1")}</p>
        </div>
        <div className="z-20">
          <h1 className="text-[2rem] font-bold mb-[2rem]">{t("header2")}</h1>
          <p className="text-[1.5rem] font-normal">
            {t.rich("point1", {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="text-[1.5rem] font-normal">
            {t.rich("point2", {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="text-[1.5rem] font-normal">
            {t.rich("point3", {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="text-[1.5rem] font-normal">
            {t.rich("point4", {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
          <p className="text-[1.5rem] font-normal">
            {t.rich("point5", {
              second: (chunk) => <span className="font-bold">{chunk}</span>,
            })}
          </p>
        </div>
        <div className="z-20 w-full flex items-center justify-end">
          <p className="text-[1.5rem] font-bold ">{t("des2")}</p>
        </div>
      </div>
    </div>
  );
}
