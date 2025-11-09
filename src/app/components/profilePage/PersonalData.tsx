import Image from "next/image";

export function PersonalData({
  name,
  img,
  email,
  number,
}: {
  name: string;
  img: string;
  email: string;
  number: string;
}) {
  return (
    <div className="flex w-full flex-col gap-2 items-center justify-center p-[var(--section-Padding)]">
      <div className="w-[10rem] h-[10rem] rounded-full overflow-hidden">
        <Image
          alt="personal image"
          width={700}
          height={700}
          src={`/profile/${img}.svg`}
          className="w-full"
        />
      </div>
      <h2 className="text-[2rem] font-bold text-black">{name}</h2>
      <div className="flex gap-2 items-center justify-center text[1.5rem] text-[#888]">
        <p>{email}</p>
        <div className="w-[0.2rem] aspect-square rounded-full bg-black "></div>
        <p>{number}</p>
      </div>
    </div>
  );
}
