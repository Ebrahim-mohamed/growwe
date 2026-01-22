import { useTranslations } from "next-intl";
import { Card } from "./Card";
const cards = [
  {
    header: "header1",
    des: "des1",
    img: "organic",
    Number: "Organic-Farming-Hydroponic",
  },
  {
    header: "header2",
    des: "des2",
    img: "agriculture",
    Number: "Mulching-in-Agriculture",
  },
  {
    header: "header3",
    des: "des3",
    img: "landscap",
    Number: "Landscaping",
  },
  {
    header: "header4",
    des: "des4",
    img: "prun",
    Number: "Pruning-Plants",
  },
  {
    header: "header5",
    des: "des5",
    img: "irrigation",
    Number: "Irrigation",
  },
  {
    header: "header6",
    des: "des6",
    img: "fertilizers",
    Number: "Fertilizers",
  },
];
export function CardsSection() {
  const t = useTranslations("horticulture.cardsSection");
  return (
    <div className="p-[var(--section-Padding)] flex flex-col items-center justify-center gap-[1.5rem] w-full bg-[#E9EFE9]">
      <h1 className="text-[#387023] text-[4rem] font-bold mb-[2.5rem] text-center">
        {t("header")}
      </h1>
      <div className="grid grid-cols-3 max-[1100px]:grid-cols-2 w-fit   gap-[1.5rem] max-[500px]:grid-cols-2">
        {cards.map((card) => (
          <Card
            des={t(card.des)}
            header={t(card.header)}
            bg={card.img}
            articleName={card.Number}
            buttonName={t("button")}
            key={card.header}
          />
        ))}
      </div>
    </div>
  );
}
