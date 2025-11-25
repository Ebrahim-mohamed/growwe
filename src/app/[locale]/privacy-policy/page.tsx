import { useTranslations } from "next-intl";

export default function Privacy() {
  const t = useTranslations("privacy");
  return (
    <>
      <div className="bg-[url('/contact/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative">
        {/* <Image
        alt="arrow image"
        src="/contact/arrow.png"
        width={500}
        height={500}
        className="w-[70rem] absolute top-0 left-0 z-30"
      /> */}
        <p
          className={` text-[5rem] font-black text-white leading-[6.75rem] font-[ClassicoURW] `}
        >
          {t("title")}
        </p>
      </div>
      <div className="p-[var(--section-Padding)]">
        {Array.from({ length: 36 }).map((_, index) => (
          <p key={index} className="text-black text-[2rem] mb-[0.5rem] ">
            {index + 1} - {t(`point${index + 1}`)}
          </p>
        ))}
      </div>
    </>
  );
}
