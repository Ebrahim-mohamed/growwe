import { useTranslations } from "next-intl";
import Image from "next/image";

export function NotEgyptProductSection({
  title,
  des,
  img,
  type,
}: {
  title: string;
  des: string;
  img: string;
  type: string;
}) {
  const t = useTranslations(`notEgyptSection.${type}`);
  return (
    <div className="p-[var(--section-Padding)] flex items-center justify-between w-full gap-[1.5rem]">
      <div>
        <h1 className="text-[2.5rem] text-[#E5AC71] font-black mb-[1.5rem]">
          {t(title)}
        </h1>
        <h1 className="text-[1.5rem] text-black font-normal">{t(des)}</h1>
      </div>
      <div className="w-[100%]">
        <Image
          alt="image"
          src={`/notEgyptSection/${img}.png`}
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
}
