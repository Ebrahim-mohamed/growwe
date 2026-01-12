import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export function Partners({ isHome }: { isHome?: boolean }) {
  const t = useTranslations("homePage.partnersSection");
  const locale = useLocale();
  return (
    <div
      className={` flex max-[1000px]:flex-col max-[1000px]:items-center items-start justify-center gap-4 p-[var(--section-Padding)] ${
        isHome ? " bg-white " : " bg-[#F8FFF5] "
      } max-[500px]:flex-col`}
    >
      <div className="w-[40%] max-[1000px]:w-full  flex max-[1000px]:items-center max-[1000px]:justify-center z-100">
        <Image
          alt="partners images"
          src="/home/partners.png"
          width={300}
          height={300}
          className="max-w-[18rem] w-[100%] max-[500px]:max-w-[50%]  aspect-[289/285]"
        />
      </div>
      <div className="z-100">
        <h1 className="text-[2.5rem] max-[1000px]:text-center text-[#387023] font-black mb-[2rem] max-[1000px]:mb-[0.5rem] max-[1200px]:text-[2.2rem] max-[1000px]:text-[2rem]">
          {t.rich("header", {
            second: (chunk) => (
              <span className="text-[#E5AC71] italic">{chunk}</span>
            ),
          })}
        </h1>
        <div className="flex flex-col gap-4 max-[1000px]:text-center">
          <p className="text-[1.8rem] text-black font-medium">
            {t.rich("p", {
              second: (chunk) => (
                <span className="text-[#426B1F] font-bold">{chunk}</span>
              ),
            })}
          </p>
          <div className="flex max-[1000px]:flex-col max-[1000px]:gap-4 items-center w-full justify-between">
            <p className="text-[1.8rem] max-[1000px]:text-[1.6rem] text-black font-black">
              {t("thirdP")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="bg-black text-white text-[1.2rem] flex items-start justify-center p-[1rem] rounded-[1rem] hover:cursor-pointer"
            >
              <Image
                alt="hands image"
                src="/home/hands.png"
                width={100}
                height={100}
                className="w-[2.5rem]  mr-[0.3rem]"
              />

              {t("button")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
