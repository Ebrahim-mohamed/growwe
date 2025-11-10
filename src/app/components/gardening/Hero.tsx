import { useLocale, useTranslations } from "next-intl";
import { mirza } from "@/app/[locale]/layout";
import Link from "next/link";
export function Hero() {
  const t = useTranslations("gardening.heroSection");
  const locale = useLocale();
  return (
    <div className="bg-[url('/gardening/hero.png')] bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end max-[500px]:items-center justify-between ">
      <div className="flex items-end justify-between max-[500px]:flex-col max-[500px]:items-center max-[500px]:gap-[3rem] w-full -mb-[1.5rem]">
        <div className={`${mirza.className} max-[500px]:text-center`}>
          <h1 className="text-[5rem] text-[#E5AC71] font-bold -mb-[1rem] ">
            {t("title")}
          </h1>
          <div className="font-medium text-[3.5rem] text-white">
            <p className="mb-[-1rem]">{t("p")}</p>
          </div>
        </div>
        <Link
          href={`/${locale}/products`}
          className="bg-[#FF0606] text-white rounded-[2.5rem] text-[2.3rem] font-bold py-[0.2rem] px-[1.5rem]  mr-[0.75rem]"
        >
          {t("shop")}
        </Link>
      </div>
    </div>
  );
}
