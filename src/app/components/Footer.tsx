import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "./SocialIcon";
const links = ["about", "products", "horticulture", "contact"];
const SocialLinks = [
  { name: "facebook", url: "https://www.facebook.com/growweofficial" },
  { name: "instagram", url: "https://www.instagram.com/growweofficial/" },
  { name: "tiktok", url: "https://www.tiktok.com/@growweofficial" },
  { name: "linkedin", url: "https://www.linkedin.com/company/growweofficial/" },
];
export function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();
  return (
    <div className=" flex flex-col gap-[1rem] px-10 py-18 bg-[var(--green-color)] text-white">
      <div>
        <Image
          alt="logo image"
          src="/logo.png"
          className="w-[13rem] mb-[1rem]"
          width={300}
          height={300}
        />
      </div>
      <div className="flex w-full items-start justify-between max-[480px]:flex-col max-[480px]:gap-[1.5rem]">
        <div className="w-[40rem]">
          <p className="text-[1rem] font-light leading-[1.5rem]">{t("p")}</p>
        </div>
        <div>
          <h2 className="text-[1.5rem] font-bold mb-[0.8rem]">{t("link")}</h2>
          <div className="flex flex-col items-start justify-start text-[1rem] font-normal">
            {links.map((link) => (
              <Link href={link} key={link}>
                {t(link)}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-[1.5rem]">
          <Link
            href="mailto:info@growwe.com"
            className="text-[1rem] font-medium text-white"
          >
            info@growwe.com
          </Link>
          <div className="flex items-center justify-center gap-[2rem]">
            {SocialLinks.map((link) => (
              <SocialIcon img={link.name} key={link.name} to={link.url} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-full font-normal">
        <div className="flex items-center justify-center gap-[3rem] text-[1.2rem] ">
          <Link href={`/${locale}/privacy-policy`}>{t("privacy")}</Link>
          <Link href={`/${locale}/refund`}>{t("terms")}</Link>
        </div>
        <p className="text-[0.9rem]">{t("copyRight")}</p>
      </div>
    </div>
  );
}
