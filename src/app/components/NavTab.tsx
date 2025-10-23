"use client";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

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
  const [isHovering, setIsHovering] = useState(false);

  const handleNavigate = async (url: string) => {
    await router.push(url);
    onClose?.();
  };

  if (name === "Products") {
    return (
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative"
      >
        <DropdownMenu open={isHovering} onOpenChange={setIsHovering}>
          <DropdownMenuTrigger
            className={`text-[1.7rem] text-white hover:animate-pulse outline-0 focus:outline-0 hover:cursor-pointer max-[800px]:text-black max-[800px]:text-[2.5rem] ${
              path.includes(to) ? " font-extrabold " : " font-medium "
            }`}
          >
            {name}
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="start"
            sideOffset={8}
            className="bg-white shadow-md rounded-lg p-2"
          >
            <DropdownMenuItem
              onClick={() => handleNavigate(`/${locale}/soilless-growing`)}
              className="hover:cursor-pointer max-[800px]:text-[1.5rem] text-[1.2rem] font-bold hover:underline"
            >
              {aboutT("peat")}
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => handleNavigate(`/${locale}/mulch`)}
              className="hover:cursor-pointer max-[800px]:text-[1.5rem] text-[1.2rem] font-bold hover:underline"
            >
              {aboutT("mulch")}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <button
      onClick={() => handleNavigate(`/${locale}/${to}`)}
      className={`text-[1.7rem] text-white hover:animate-pulse hover:cursor-pointer outline-0 focus:outline-0 max-[800px]:text-black max-[800px]:text-[2.5rem] ${
        path.includes(to) ? " font-extrabold " : " font-medium "
      }`}
    >
      {name}
    </button>
  );
}
