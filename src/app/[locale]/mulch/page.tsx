import { FourthSection } from "@/app/components/soilAndMulchPageSections/FourthSection";
import { Hero } from "@/app/components/soilAndMulchPageSections/Hero";
import { SecondSection } from "@/app/components/soilAndMulchPageSections/SecondSection";
import { ThirdSection } from "@/app/components/soilAndMulchPageSections/ThirdSection";

const paragrphs = [
  { head: "mulchHeader1", des: "mulchDes1" },
  { head: "mulchHeader2", des: "mulchDes2" },
  { head: "mulchHeader3", des: "mulchDes3" },
];

const soilBox = [
  {
    header: "mulchFirstBoxHeader",
    des: "mulchFirstBoxDescription",
    img: "First",
  },
  {
    header: "mulchSecondBoxHeader",
    des: "mulchSecondBoxDescription",
    img: "Second",
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
    img: "Fourth",
  },
  {
    header: "mulchFifthBoxHeader",
    des: "mulchFifthBoxDescription",
    img: "Fifth",
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
  return (
    <div>
      <Hero title="mulch" />
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
    </div>
  );
}
