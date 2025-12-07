import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type newType = {
  headerEn: string;
  headerAr: string;
  praEn: string;
  praAr: string;
  image: string;
  link: string;
};
export function NewBox(newContent: newType) {
  const locale = useLocale();
  return (
    <div className="flex-1 bg-[#F4F4F4] max-w-[30rem]  rounded-[0.5rem]">
      <div className="w-full">
        <Image
          alt="new image"
          src={`/news/${newContent.image}.png`}
          width={600}
          height={600}
          className="w-full"
        />
      </div>
      <div className="p-[1.5rem] flex flex-col justify-between">
        <div className="flex flex-col gap-[0.8rem]">
          <h2 className="text-[1.4rem] text-black font-medium">
            {locale === "en" ? newContent.headerEn : newContent.headerAr}
          </h2>
          <p className="text-[1rem] text-[#494949] font-medium">
            {locale === "en" ? newContent.praEn : newContent.praAr}
          </p>
        </div>
        <Link
          href={newContent.link}
          className="text-[1rem] font-medium text-[#C05DEF]"
        >
          {locale === "en" ? "Read more" : "لمعرفة المزيد"}
        </Link>
      </div>
    </div>
  );
}
