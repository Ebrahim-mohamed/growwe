import Image from "next/image";
import Link from "next/link";

export function SocialIcon({ img, to }: { img: string; to: string }) {
  return (
    <Link href={to} className="hover:cursor-pointer">
      <Image
        alt="social media platform icon"
        src={`/home/${img}.svg`}
        width={200}
        height={200}
        className="w-[2rem]"
      />
    </Link>
  );
}
