import Image from "next/image";

export function Hero({
  title,
  img,
  bg,
}: {
  title: string;
  img: string;
  bg: string;
}) {
  return (
    <div
      className=" bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative overflow-hidden "
      style={{ backgroundImage: `url(/auth/${bg}.png)` }}
    >
      <p className=" text-[5rem] font-black text-white leading-[6.75rem] font-[ClassicoURW]">
        {title}
      </p>
    </div>
  );
}
