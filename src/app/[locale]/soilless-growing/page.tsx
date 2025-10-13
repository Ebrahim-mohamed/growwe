import { FourthSection } from "@/app/components/soilAndMulchPageSections/FourthSection";
import { Hero } from "@/app/components/soilAndMulchPageSections/Hero";
import { SecondSection } from "@/app/components/soilAndMulchPageSections/SecondSection";
import { ThirdSection } from "@/app/components/soilAndMulchPageSections/ThirdSection";

const paragrphs = [
  { head: "soilHeader1", des: "soilDes1" },
  { head: "soilHeader2", des: "soilDes2" },
  { head: "soilHeader3", des: "soilDes3" },
];

const soilBox = [
  {
    header: "soilFirstBoxHeader",
    des: "soilFirstBoxDescription",
    img: "First",
  },
  {
    header: "soilSecondBoxHeader",
    des: "soilSecondBoxDescription",
    img: "Second",
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
    img: "Fourth",
  },
  {
    header: "soilFifthBoxHeader",
    des: "soilFifthBoxDescription",
    img: "Fifth",
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
    </div>
  );
}
