import Image from "next/image";

export function VideoSection() {
  return (
    <div className="p-[var(--section-Padding)] w-full relative">
      <h1 className="absolute top-1/2 left-1/2 text-[4rem] text-black font-black">
        video placeholder
      </h1>
      <Image
        alt="video placeholder"
        src="/about/video-placeholder.png"
        width={1000}
        height={1000}
        className="w-full h-auto"
      />
    </div>
  );
}
