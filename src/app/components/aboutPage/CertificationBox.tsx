import Image from "next/image";

export function CertificationBox({
  header,
  des,
  img,
}: {
  header: string;
  des: string;
  img: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center gap-[0.5rem]">
      <Image
        alt="certification image"
        src={`/about/${img}.png`}
        width={500}
        height={500}
        className="w-[13rem]"
      />
      <h2 className="text-[#387023] text-[2rem] font-bold">{header}</h2>
      <p className="text-black text-[1.8rem] font-normal">{des}</p>
    </div>
  );
}
