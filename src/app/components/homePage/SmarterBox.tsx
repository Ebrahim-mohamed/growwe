import Image from "next/image";

export function SmarterBox({
  header,
  des,
  img,
}: {
  header: string;
  des: string;
  img: string;
}) {
  return (
    <div className="flex items-start justify-center gap-[1.5rem] flex-1 max-[550px]:flex-col max-[550px]:items-start">
      <div className="w-[5rem] h-[5rem]  bg-[#F7E6D4] flex items-center justify-center rounded-full">
        <Image
          alt="image"
          src={`/home/smart${img}Icon.svg`}
          width={100}
          height={100}
          className="w-[70%] "
        />
      </div>
      <div className="text-[#426B1F]  max-w-[40%] max-[550px]:max-w-full">
        <h1 className="font-bold text-[1.2rem]">{header}</h1>
        <p className="font-normal text-[1.1rem]">{des}</p>
      </div>
    </div>
  );
}
