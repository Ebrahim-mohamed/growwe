import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("homePage");
  return (
    <div className="bg-[url('/home/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start">
      <p className=" text-[5rem] font-black text-white leading-[6.75rem]">
        {t("title")
          .split(" | ")
          .map((part, index) => (
            <span key={index}>
              {part}
              {index === 0 && <br />}
            </span>
          ))}
      </p>
    </div>
  );
}
