"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLink({ name, to }: { name: string; to: string }) {
  const path = usePathname();
  console.log(path);
  return (
    <Link
      href={`/dashboard/${to}`}
      className={` ${
        path.includes(to)
          ? " text-black font-bold bg-white p-[0.5rem]  "
          : " text-white "
      } text-[1.5rem]  px-[1rem]  w-full`}
    >
      {name}
    </Link>
  );
}
