import Image from "next/image";

export function VideoSection() {
  return (
    <div className="p-[var(--section-Padding)] w-full relative">
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
