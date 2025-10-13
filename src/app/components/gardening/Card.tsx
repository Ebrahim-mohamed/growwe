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
    <div className=" flex flex-col items-center justify-center gap-[2rem]  flex-1 aspect-[568/527] text-black shadow-[0_0_10px_rgba(0,0,0,0.12)] p-[0.5rem] rounded-[0.8rem] bg-white">
      <Image
        alt="service image"
        src={`/gardening/${img}.png`}
        width={100}
        height={100}
        className="w-[4rem] h-[4rem] rounded-full"
      />
      <h1 className="text-[1.5rem] font-bold">{header}</h1>
      <p className="text-[1rem] font-normal text-center">{des}</p>
      <button className="px-[1.5rem] py-[0.2rem] rounded-[0.5rem] bg-[#E8F5E9] text-[1rem] text-[#387023] hover:cursor-pointer flex items-center justify-center gap-1">
        &#10010;
        <p>{buttonName}</p>
      </button>
    </div>
  );
}
