import { useTranslations } from "next-intl";
import { MissionAndVisionCard } from "./MissionAndVisionCard";
import Image from "next/image";
const whySec = ["organic", "sustainable", "egyptian"];
export function WhoWeAre() {
  const t = useTranslations("about.whoWeAreSection");
  return (
    <div className="flex flex-col gap-[1rem] p-[var(--section-Padding)] relative">
      <Image
        alt="strawberry image"
        src="/about/strawberry.png"
        width={400}
        height={400}
        className="absolute top-[18%] right-0 w-[40rem]"
      />
      <div className="flex w-full items-center justify-between">
        <div className="text-[2.5rem] max-w-[50%]">
          <h1 className="text-[#E5AC71] font-bold">{t("whoHeader")}</h1>
          <p className="text-[#426B1F] font-semibold">{t("whoDes")}</p>
        </div>
        <div className="p-16 rounded-[3rem] bg-[#FCF7F1]">
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
