import Image from "next/image";
import { NavLink } from "./NavLink";

export function DashboardNavbar() {
  return (
    <div className="flex flex-col gap-[1.5rem] py-[2rem]   h-dvh min-w-[16rem] bg-[#387023]">
      <div className="w-[15rem] p-[2rem]">
        <Image
          alt="logo image"
          src="/logo.png"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <NavLink name="Users" to="users" />
      <NavLink name="Products" to="products" />
      <NavLink name="Orders" to="orders" />
      <NavLink name="News" to="news" />
    </div>
  );
}
