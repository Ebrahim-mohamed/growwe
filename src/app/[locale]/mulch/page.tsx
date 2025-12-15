import { FourthSection } from "@/app/components/soilAndMulchPageSections/FourthSection";
import { Header } from "@/app/components/soilAndMulchPageSections/Header";
import { Hero } from "@/app/components/soilAndMulchPageSections/Hero";
import { SecondSection } from "@/app/components/soilAndMulchPageSections/SecondSection";
import { TableSection } from "@/app/components/soilAndMulchPageSections/TableSection";
import { ThirdSection } from "@/app/components/soilAndMulchPageSections/ThirdSection";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const paragrphs = [
  { head: "mulchHeader1", des: "mulchDes1" },
  { head: "mulchHeader2", des: "mulchDes2" },
  { head: "mulchHeader3", des: "mulchDes3" },
];

const soilBox = [
  {
    header: "mulchFirstBoxHeader",
    des: "mulchFirstBoxDescription",
    img: "Second",
  },
  {
    header: "mulchSecondBoxHeader",
    des: "mulchSecondBoxDescription",
    img: "First",
  },
  {
    header: "mulchThirdBoxHeader",
    des: "mulchThirdBoxDescription",
    img: "Third",
  },
];
const soilBox2 = [
  {
    header: "mulchFourthBoxHeader",
    des: "mulchFourthBoxDescription",
    img: "Spe1",
  },
  {
    header: "mulchFifthBoxHeader",
    des: "mulchFifthBoxDescription",
    img: "Spe2",
  },
  {
    header: "mulchSixthBoxHeader",
    des: "mulchSixthBoxDescription",
    img: "Sixth",
  },
];
const firstBoxes = ["mulchBox1", "mulchBox2", "mulchBox3", "mulchBox4"];
const secondBoxes = ["mulchBox5", "mulchBox6"];
export default function Mulch() {
  const locale = useLocale();
  const tableHeader = useTranslations(
    "informationMulchAndSoil.tableSection.mulchTable1"
  );
  return (
    <div>
      <Hero title="mulch" />
      <Header type="mulch" />
      <SecondSection
        img="mulch"
        title="mulchHeader"
        pra1="mulchPra1"
        pra2="mulchPra2"
        firstBoxes={firstBoxes}
        secondBoxes={secondBoxes}
        mainPraForPartTow="mulchMainPra"
        mainDesForPartTow="mulchDes"
      />
      <ThirdSection header="advantages" des="mulchDes" pras={paragrphs} />
      <FourthSection
        header="mulchHeader"
        attachedHeader="mulchAttachHeader"
        boxes1={soilBox}
        boxes2={soilBox2}
      />
      <div className="w-full py-[var(--section-Padding)] min-[1200px]:px-[15rem] max-[1200px]:px-[var(--section-Padding)] flex flex-col gap-[2rem] items-center justify-center bg-[#F8F9FB] relative">
        <Link
          href={
            locale == "en"
              ? "/Growwe Mulch Technical Facts-en.pdf"
              : "/Growwe Mulch Technical Facts-ar.pdf"
          }
          className={`w-[4rem] aspect-square absolute top-[5rem] max-[500px]:top-[3rem] ${
            locale === "en"
              ? " min-[1200px]:right-[17rem] max-[1200px]:right-[7rem] max-[500px]:right-[4rem]  "
              : " min-[1200px]:left-[17rem] max-[1200px]:left-[7rem]  max-[500px]:left-[4rem]"
          } cursor-pointer`}
          download
        >
          <Image
            alt="pdf image"
            width={500}
            height={500}
            src="/mulchAndSoil/pdf.png"
            className="w-full"
          />
        </Link>

        <h1 className="text-[#387023] text-[2.5rem] font-black text-center mb-[3rem]">
          {tableHeader("header")}
        </h1>
        <TableSection tableNumber={1} rowsNumber={8} type="mulch" />
      </div>
    </div>
  );
}
