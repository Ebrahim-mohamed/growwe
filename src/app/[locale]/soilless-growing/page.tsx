import { FourthSection } from "@/app/components/soilAndMulchPageSections/FourthSection";
import { Hero } from "@/app/components/soilAndMulchPageSections/Hero";
import { SecondSection } from "@/app/components/soilAndMulchPageSections/SecondSection";
import { TableSection } from "@/app/components/soilAndMulchPageSections/TableSection";
import { ThirdSection } from "@/app/components/soilAndMulchPageSections/ThirdSection";
import { useTranslations } from "next-intl";

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
  const tableHeader = useTranslations(
    "informationMulchAndSoil.tableSection.soilTable1"
  );
  return (
    <div>
      <Hero title="soil" />
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
      <div className="w-full p-[var(--section-Padding)] flex flex-col gap-[2rem] items-center justify-center">
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
