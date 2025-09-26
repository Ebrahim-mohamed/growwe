import Image from "next/image";
import { NavTab } from "./NavTab";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const navTabs = {
  "About Us": "about",
  Products: "products",
  Gardening: "gardening",
  "Contact Us": "contact",
};
export function Header() {
  const t = useTranslations("lang");
  const locale = useLocale();
  return (
    <div className="flex items-center justify-between gap-1 p-10 bg-transparent absolute top-0 left-0 w-full">
      <div className="flex-1">
        <Link href={locale}>
          <Image
            alt="logo image"
            src="/logo.svg"
            width={100}
            height={100}
            priority
            className="w-[18rem]"
          />
        </Link>
      </div>
      <div className="flex items-center justify-between w-fit gap-[3rem]">
        {Object.entries(navTabs).map((entry) => (
          <NavTab name={entry[0]} to={entry[1]} key={entry[0]} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-8 flex-1">
        <p className="text-white text-[1.5rem] hover:cursor-pointer">
          {t("lang")}
        </p>
        <div>
          <Image
            alt="cart image"
            src="/cart.png"
            priority
            className="w-[1.5rem] "
            width={20}
            height={20}
          />
        </div>
        <div>
          <Image
            alt="profile image"
            src="/profile.png"
            priority
            className="w-[1.8rem]"
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
}
