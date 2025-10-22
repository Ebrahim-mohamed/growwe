"use client";
import Image from "next/image";
import { NavTab } from "./NavTab";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";

const navTabs = ["about", "products", "gardening", "contact"];
export function Header() {
  const locale = useLocale();
  const t = useTranslations("header");
  const [isOpen, setIsOpen] = useState(false);
  function onCloseMenu() {
    if (isOpen) setIsOpen(false);
  }
  return (
    <div className="flex items-center justify-between gap-[2rem] p-10 bg-transparent absolute top-0 left-0 w-full z-50">
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
      {isOpen && (
        <>
          <button
            onClick={() => setIsOpen(false)}
            className="z-50 text-left w-full"
          >
            <Image
              alt="menu icon"
              width={100}
              height={100}
              className="w-[3rem] aspect-square"
              src="/close.png"
            />
          </button>
          <div className="absolute left-0 top-0 w-full h-dvh bg-white flex flex-col items-center justify-center gap-[1rem]">
            {navTabs.map((link) => (
              <NavTab
                name={t(link)}
                to={link}
                key={link}
                onClose={onCloseMenu}
              />
            ))}
          </div>
        </>
      )}
      <div className="flex items-center justify-between w-fit gap-[3rem] max-[800px]:hidden">
        {navTabs.map((link) => (
          <NavTab name={t(link)} to={link} key={link} />
        ))}
      </div>
      <div className="flex items-center justify-end gap-10 flex-1">
        <button className="min-[800px]:hidden" onClick={() => setIsOpen(true)}>
          <Image
            alt="menu icon"
            width={100}
            height={100}
            className="w-[3rem] aspect-square"
            src="/menu.png"
          />
        </button>
        <p className="text-white text-[1.5rem] hover:cursor-pointer">
          {t("lang")}
        </p>
        <div>
          <Image
            alt="cart image"
            src="/cart.png"
            priority
            className="w-[1.8rem] "
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
            className="w-[1.7rem]"
            width={20}
            height={20}
          />
        </Link>
      </div>
    </div>
  );
}
