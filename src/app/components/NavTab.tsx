"use client";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function NavTab({
  name,
  to,
  onClose,
}: {
  name: string;
  to: string;
  onClose?: () => void;
}) {
  const aboutT = useTranslations("header.aboutProduct");
  const locale = useLocale();
  const path = usePathname();
  const router = useRouter();

  const handleNavigate = async (url: string) => {
    await router.push(url);
    onClose?.();
  };

  if (name === "Products") {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`text-[1.5rem] text-white hover:animate-pulse outline-0 focus:outline-0 hover:cursor-pointer max-[800px]:text-black ${
            path.includes(to) ? " font-extrabold " : " font-medium "
          }`}
        >
          {name} &#x2193;
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => handleNavigate(`/${locale}/soilless-growing`)}
            className="hover:cursor-pointer"
          >
            {aboutT("peat")}
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => handleNavigate(`/${locale}/mulch`)}
            className="hover:cursor-pointer"
          >
            {aboutT("mulch")}
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => handleNavigate(`/${locale}/${to}`)}
            className="hover:cursor-pointer"
          >
            {name}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <button
      onClick={() => handleNavigate(`/${locale}/${to}`)}
      className={`text-[1.5rem] text-white hover:animate-pulse hover:cursor-pointer outline-0 focus:outline-0 max-[800px]:text-black ${
        path.includes(to) ? " font-extrabold " : " font-medium "
      }`}
    >
      {name}
    </button>
  );
}
