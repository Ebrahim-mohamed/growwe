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
  { head: "soilHeader1", des: "soilDes1" },
  { head: "soilHeader2", des: "soilDes2" },
  { head: "soilHeader3", des: "soilDes3" },
];

const soilBox = [
  {
    header: "soilFirstBoxHeader",
    des: "soilFirstBoxDescription",
    img: "Second",
  },
  {
    header: "soilSecondBoxHeader",
    des: "soilSecondBoxDescription",
    img: "First",
  },
  {
    header: "soilThirdBoxHeader",
    des: "soilThirdBoxDescription",
    img: "Third",
  },
];
const soilBox2 = [
  {
    header: "soilFourthBoxHeader",
    des: "soilFourthBoxDescription",
    img: "Fifth",
  },
  {
    header: "soilFifthBoxHeader",
    des: "soilFifthBoxDescription",
    img: "Fourth",
  },
  {
    header: "soilSixthBoxHeader",
    des: "soilSixthBoxDescription",
    img: "Sixth",
  },
];
const firstBoxes = ["soilBox1", "soilBox2", "soilBox3", "soilBox4"];
const secondBoxes = ["soilBox5", "soilBox6"];
export default function SoillessGrowing() {
  const locale = useLocale();
  const tableHeader = useTranslations(
    "informationMulchAndSoil.tableSection.soilTable1"
  );
  return (
    <div>
      <Hero title="soil" />
      <Header type="soil" />
      <SecondSection
        img="soil"
        title="soilHeader"
        pra1="soilPra1"
        firstBoxes={firstBoxes}
        secondBoxes={secondBoxes}
        mainPraForPartTow="soilMainPra"
        mainDesForPartTow="soilDes"
      />
      <ThirdSection header="advantages" des="soilDes" pras={paragrphs} />
      <FourthSection
        header="soilHeader"
        attachedHeader="soilAttachHeader"
        boxes1={soilBox}
        boxes2={soilBox2}
      />
      <div className="w-full py-[var(--section-Padding)] min-[1200px]:px-[15rem] max-[1200px]:px-[var(--section-Padding)] flex flex-col gap-[2rem] items-center justify-center bg-[#F8F9FB] relative">
        <Link
          href={
            locale == "en"
              ? "/GROWWWE Soilless Growing Media Technical Facts-en.pdf"
              : "/GROWWWE Soilless Growing Media Technical Facts-ar.pdf"
          }
          className={`w-[4rem] aspect-square absolute top-[5rem] max-[500px]:top-[3rem] ${
            locale === "en"
              ? " min-[1200px]:right-[17rem] max-[1200px]:right-[7rem] max-[500px]:right-[7rem]"
              : " min-[1200px]:left-[17rem] max-[1200px]:left-[7rem] max-[500px]:right-[7rem]"
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

        <TableSection tableNumber={1} rowsNumber={9} type="soil" />
        <TableSection tableNumber={2} rowsNumber={9} type="soil" />
        <TableSection tableNumber={3} rowsNumber={8} type="soil" />
        <TableSection tableNumber={4} rowsNumber={10} type="soil" />
      </div>
    </div>
  );
}
