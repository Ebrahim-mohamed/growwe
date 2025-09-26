// import Image from "next/image";

export function UseTab({ use }: { use: string }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {/* <Image alt="correct image" src="/home/correct.svg" /> */}
      <p className="text-[2rem] ">{use}</p>
    </div>
  );
}
