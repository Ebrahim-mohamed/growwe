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
      className=" bg-cover w-dvw h-dvh p-[var(--section-Padding)]  flex items-end justify-start relative overflow-hidden"
      style={{ backgroundImage: `url(/auth/${bg}.png)` }}
    >
      <Image
        alt="arrow image"
        src={`/auth/${img}.png`}
        width={500}
        height={500}
        className={`w-[18rem] absolute -bottom-[5%] ${
          title === "YOUR PROFILE" ? " left-[45%] " : " left-[23%] "
        } z-30`}
      />
      <p className=" text-[5rem] font-black text-white leading-[6.75rem]">
        {title}
      </p>
    </div>
  );
}
