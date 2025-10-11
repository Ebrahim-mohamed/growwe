import Image from "next/image";

export function InfoBox({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-[1rem] text-[1.3rem]">
      <Image
        alt="info image"
        src={`/contact/${icon}.svg`}
        width={200}
        height={200}
        className="w-[2.3rem]"
      />
      <p>{name}</p>
    </div>
  );
}
