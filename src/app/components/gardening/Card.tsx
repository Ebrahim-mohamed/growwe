import Image from "next/image";

export function Card({
  header,
  des,
  img,
  buttonName,
}: {
  header: string;
  des: string;
  img: string;
  buttonName: string;
}) {
  return (
    <div className=" flex flex-col items-center justify-center gap-[2rem]  flex-1 aspect-[568/527] text-black shadow-[0_0_10px_rgba(0,0,0,0.12)] p-[0.5rem] rounded-[0.8rem]">
      <Image
        alt="service image"
        src={`/gardening/${img}.png`}
        width={100}
        height={100}
        className="w-[4rem] h-[4rem] rounded-full"
      />
      <h1 className="text-[1.5rem] font-bold">{header}</h1>
      <p className="text-[1rem] font-normal text-center">{des}</p>
      <button className="px-[1rem] py-[0.8rem] rounded-[0.8rem] bg-black text-[0.8rem] text-white hover:cursor-pointer">
        {buttonName}
      </button>
    </div>
  );
}
