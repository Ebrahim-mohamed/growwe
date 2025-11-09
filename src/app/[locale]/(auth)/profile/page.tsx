import { MostUseHeader } from "@/app/components/MostUseHeader";
import { Hero } from "@/app/components/profilePage/HeroSection";
import { PersonalData } from "@/app/components/profilePage/PersonalData";
import { ProfileTabs } from "@/app/components/profilePage/ProfileTabs";
import { useTranslations } from "next-intl";

export default function Profile() {
  const t = useTranslations("profile.heroSection");
  return (
    <div>
      <Hero />
      <div className="pt-[var(--section-Padding)] px-[var(--section-Padding)]">
        <MostUseHeader header={t("header")} des={t("des")} isNOtWhite />
      </div>
      <PersonalData
        email="ebmo3112002@gmail.com"
        img="person"
        name="ebrahim"
        number="01099507353"
      />
      <ProfileTabs />
    </div>
  );
}
