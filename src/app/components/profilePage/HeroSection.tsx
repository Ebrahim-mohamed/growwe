import { useTranslations } from "next-intl";
import { mirza } from "@/app/[locale]/layout";
export function Hero() {
  const t = useTranslations("profile.heroSection");
  return (
    <div className="bg-[url('/profile/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start">
      <div className={`${mirza.className} `}>
        <h1 className="text-[5rem] text-white font-bold -mb-[1rem]">
          {t("title")}
        </h1>
      </div>
    </div>
  );
}
