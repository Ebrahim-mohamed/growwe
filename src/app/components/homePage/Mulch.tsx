import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Mulch() {
  const locale = useLocale();
  const t = useTranslations("homePage.mulch");
  return (
    <div className="p-[var(--section-Padding)]  bg-[#FCF7F1]  text-black w-full ">
      <h1 className="text-[3.2rem] font-bold text-center text-[#E5AC71]">
        {t("title")}
      </h1>
      <p
        className={`text-[2rem] ${
          locale === "en" ? " mb-[1rem] " : " mb-[4rem] "
        } text-center`}
      >
        {t.rich("des", {
          second: (chunk) => <span className="italic font-bold">{chunk}</span>,
        })}
      </p>
      <div className="flex items-center gap-2 w-full justify-between max-[550px]:flex-col mt-[-3rem] max-[1350px]:mt-[-1rem] max-[1100px]:mt-0">
        <p className="text-[2rem] max-[500px]:text-center">
          {t.rich("content", {
            second: (chunk) => <span className="font-bold">{chunk}</span>,
          })}
          <Link
            href={`/${locale}/mulch`}
            className="text-[1.5rem] text-[#5B5757]"
          >
            {" "}
            {t("know")}
          </Link>
        </p>

        <Image
          alt="mulch image"
          width={500}
          height={500}
          src="/home/mulchFeatures.png"
          className="w-[65%]"
        />
      </div>
    </div>
  );
}
