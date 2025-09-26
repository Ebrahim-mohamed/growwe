import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
const links = ["about", "products", "gardening", "contact"];
export function Footer() {
  const t = useTranslations("footer");
  return (
    <div className=" flex flex-col p-[var(--section-Padding)] bg-[var(--green-color)] text-white">
      <div>
        <Image
          alt="logo image"
          src="/logo.svg"
          className="w-[20rem] mb-[2rem]"
          width={300}
          height={300}
        />
      </div>
      <div className="flex w-full items-start justify-between">
        <p>{t("p")}</p>
        <div>
          <h2>{t("link")}</h2>
          <div>
            {links.map((link) => (
              <Link href={link} key={link}>
                {t(link)}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2>{t("link")}</h2>
          <div>
            <p>{t("email")}</p>
            <p>{t("phone1")}</p>
            <p>{t("phone2")}</p>
          </div>
        </div>
      </div>
      <div>social media</div>
      <div>last section</div>
    </div>
  );
}
