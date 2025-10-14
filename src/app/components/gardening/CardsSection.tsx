import { useTranslations } from "next-intl";
import { Card } from "./Card";
const cards1 = [
  {
    header: "header1",
    des: "des1",
    img: "organic",
    Number: 1,
  },
  {
    header: "header2",
    des: "des2",
    img: "agriculture",
    Number: 2,
  },
  {
    header: "header3",
    des: "des3",
    img: "landscap",
    Number: 3,
  },
];
const cards2 = [
  {
    header: "header4",
    des: "des4",
    img: "prun",
    Number: 4,
  },
  {
    header: "header5",
    des: "des5",
    img: "irrigation",
    Number: 5,
  },
  {
    header: "header6",
    des: "des6",
    img: "fertilizers",
    Number: 6,
  },
];
export function CardsSection() {
  const t = useTranslations("gardening.cardsSection");
  return (
    <div className="p-[var(--section-Padding)] flex flex-col items-center justify-center gap-[1.5rem] w-full bg-[#F8FFF5]">
      <h1 className="text-[#387023] text-[4rem] font-bold mb-[2.5rem] text-center">
        {t("header")}
      </h1>
      <div className="flex items-center w-full justify-between gap-[1rem]">
        {cards1.map((card) => (
          <Card
            des={t(card.des)}
            header={t(card.header)}
            bg={card.img}
            articleNumber={card.Number}
            buttonName={t("button")}
            key={card.header}
          />
        ))}
      </div>
      <div className="flex items-center w-full justify-between gap-[1rem]">
        {cards2.map((card) => (
          <Card
            des={t(card.des)}
            header={t(card.header)}
            bg={card.img}
            articleNumber={card.Number}
            buttonName={t("button")}
            key={card.header}
          />
        ))}
      </div>
    </div>
  );
}
