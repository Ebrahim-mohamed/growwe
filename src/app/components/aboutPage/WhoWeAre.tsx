import { useLocale, useTranslations } from "next-intl";
import { MissionAndVisionCard } from "./MissionAndVisionCard";
import Image from "next/image";

const whySec = ["organic", "sustainable", "egyptian"];
export function WhoWeAre() {
  const t = useTranslations("about.whoWeAreSection");
  const locale = useLocale();
  return (
    <div className="flex flex-col gap-[1rem] p-[var(--section-Padding)] relative">
      {locale === "en" ? (
        <Image
          alt="strawberry image"
          src="/about/strawberry.png"
          width={400}
          height={400}
          className={`absolute top-[18%] ${
            locale === "en" ? " right-0 " : " left-0 "
          } w-[40rem] max-[380px]:hidden`}
        />
      ) : (
        <Image
          alt="strawberry image"
          src="/about/strawberry1.png"
          width={400}
          height={400}
          className={`absolute top-[18%] ${
            locale === "en" ? " right-0 " : " left-0 "
          } w-[22rem] max-[380px]:hidden`}
        />
      )}
      <div className="flex w-full items-center justify-between mb-[1.5rem] max-[550px]:flex-col max-[550px]:gap-[1rem]">
        <div className=" max-w-[60%] max-[550px]:max-w-full">
          <h1 className="text-[#E5AC71] text-[2.5rem] font-bold">
            {t("whoHeader")}
          </h1>
          <p className="text-[2rem] text-[#426B1F] font-semibold">
            {t("whoDes")}
          </p>
        </div>
        <div className="p-16 rounded-[3rem] bg-[#FCF7F1] max-[550px]:w-full">
          <h1 className="text-[#426B1F] text-[2.5rem] font-bold mb-[0.7rem]">
            {t("why")}
          </h1>
          {whySec.map((why) => (
            <p className="text-[#1E1E1E] text-[1.8rem] font-semibold" key={why}>
              {t(why)}
            </p>
          ))}
        </div>
      </div>

      <MissionAndVisionCard header={t("newHeader")} des={t("newDes")} />
      <MissionAndVisionCard
        header={t("missionHeader")}
        secHeader={t("missionSecHeader")}
        des={t("missionDes")}
      />
      <MissionAndVisionCard
        header={t("visionHeader")}
        secHeader={t("visionSecHeader")}
        des={t("visionDes")}
      />
    </div>
  );
}
