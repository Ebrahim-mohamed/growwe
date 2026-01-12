import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";

type News = {
  titleEN: string;
  titleAR: string;
  desEN: string;
  desAR: string;
  newsImage: string;
  link: string;
};

const API_BASE = "http://localhost:3002";

export function NewBox({ news }: { news: News }) {
  const locale = useLocale();

  return (
    <div className="flex-1 bg-[#F4F4F4] max-w-[30rem] rounded-[0.5rem] overflow-hidden">
      <Image
        src={`${API_BASE}/uploads/${news.newsImage}`}
        alt="news image"
        width={600}
        height={400}
        className="w-full object-cover"
      />

      <div className="p-[1.5rem] flex flex-col gap-3">
        <h2 className="text-[1.4rem] font-medium">
          {locale === "en" ? news.titleEN : news.titleAR}
        </h2>

        <p className="text-[#494949]">
          {locale === "en" ? news.desEN : news.desAR}
        </p>

        <Link href={news.link} className="text-[#C05DEF] font-medium mt-auto">
          {locale === "en" ? "Read more" : "لمعرفة المزيد"}
        </Link>
      </div>
    </div>
  );
}
