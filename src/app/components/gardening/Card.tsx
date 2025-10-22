"use client";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Card({
  header,
  des,
  bg,
  articleNumber,
  buttonName,
}: {
  header: string;
  des: string;
  bg: string;
  articleNumber: number;
  buttonName: string;
}) {
  const [isin, setIsin] = useState(false);
  const locale = useLocale();
  return (
    <div
      className={` flex flex-col items-center justify-center gap-[0.8rem]  flex-1  p-[1.5rem]  ${
        isin ? " text-white " : " text-black "
      } shadow-[0_0_10px_rgba(0,0,0,0.12)] p-[0.5rem] rounded-[0.8rem] bg-white transition duration-[0.5s] relative overflow-hidden`}
      onMouseEnter={() => setIsin(true)}
      onMouseLeave={() => setIsin(false)}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black ${
          isin ? " opacity-[0.6] " : " opacity-0 "
        } transition duration-[0.5s] z-30`}
      ></div>
      <Image
        alt="background image"
        src={`/gardening/tips/${bg}.png`}
        width={500}
        height={500}
        className={`absolute top-0 left-0 w-full h-full ${
          isin ? " opacity-[100%] " : " opacity-0 "
        } transition duration-[0.5s] `}
      />
      <div className="w-fit h-auto rounded-full bg-[#E9EFE9] z-40 flex items-center justify-center p-6">
        <Image
          alt="service image"
          src={`/gardening/tips/${bg}.svg`}
          width={100}
          height={100}
          className="w-[3rem] h-[3rem] rounded-full "
        />
      </div>
      <h1 className="text-[1.5rem] font-bold max-w-[13rem] text-center z-40">
        {header}
      </h1>
      <p className="text-[1.2rem] font-normal max-w-[15rem] text-center z-40">
        {des}
      </p>
      <Link
        className="px-[1.5rem] py-[0.2rem] rounded-[0.5rem] bg-[#E9EFE9] text-[1rem] text-[#387023] hover:cursor-pointer flex items-center justify-center gap-1 z-40"
        href={`/${locale}/articles/${articleNumber}`}
      >
        &#10010;
        <p>{buttonName}</p>
      </Link>
    </div>
  );
}
