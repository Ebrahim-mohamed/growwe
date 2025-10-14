"use client";
import Image from "next/image";
import { NavTab } from "./NavTab";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const navTabs = ["about", "products", "gardening", "contact"];
export function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  return (
    <div className="flex items-center justify-between gap-1 p-10 bg-transparent absolute top-0 left-0 w-full z-50">
      <div className="flex-1">
        <Link href="/">
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
        {navTabs.map((link) => (
          <NavTab name={t(link)} to={link} key={link} />
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
        <Link
          href={
            localStorage.getItem("user")
              ? `/${locale}/profile`
              : `/${locale}/login`
          }
        >
          <Image
            alt="profile image"
            src="/profile.png"
            priority
            className="w-[1.8rem]"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
