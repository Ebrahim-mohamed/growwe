import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { SocialIcon } from "./SocialIcon";
const links = ["about", "products", "gardening", "contact"];
const SocialLinks = ["facebook", "instagram", "tiktok", "linkedin", "youtube"];
export function Footer() {
  const t = useTranslations("footer");
  return (
    <div className=" flex flex-col gap-[3rem] p-10 bg-[var(--green-color)] text-white">
      <div>
        <Image
          alt="logo image"
          src="/logo.svg"
          className="w-[20rem]"
          width={300}
          height={300}
        />
      </div>
      <div className="flex w-full items-start justify-between">
        <div className="w-[28rem]">
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
        <div>
          <h2 className="text-[1.5rem] font-bold mb-[0.8rem]">
            {t("contact")}
          </h2>
          <div className="text-[1rem] font-normal">
            <p>{t("email")}</p>
            <p>{t("phone1")}</p>
            <p>{t("phone2")}</p>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-end items-center">
        <div className="flex items-center justify-center gap-[4rem]">
          {SocialLinks.map((link) => (
            <SocialIcon img={link} key={link} to="#" />
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between w-full font-normal">
        <div className="flex items-center justify-center gap-[3rem] text-[1.2rem] ">
          <Link href="#">{t("terms")}</Link>
          <Link href="#">{t("privacy")}</Link>
        </div>
        <p className="text-[0.9rem]">{t("copyRight")}</p>
      </div>
    </div>
  );
}
