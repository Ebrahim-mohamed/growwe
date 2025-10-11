"use client";
import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavTab({ name, to }: { name: string; to: string }) {
  const locale = useLocale();
  const path = usePathname();
  return (
    <Link
      href={`/${locale}/${to}`}
      className={`text-[1.5rem] text-white hover:animate-pulse ${
        path.includes(to) ? " font-extrabold " : " font-medium "
      }`}
    >
      {name}
    </Link>
  );
}
