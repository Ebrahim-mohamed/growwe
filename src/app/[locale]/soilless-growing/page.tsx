import { Hero } from "@/app/components/soilAndMulchPageSections/Hero";
import { SecondSection } from "@/app/components/soilAndMulchPageSections/SecondSection";

export default function SoillessGrowing() {
  return (
    <div>
      <Hero title="soil" />
      <SecondSection img="soil" title="soilHeader" pra1="soilPra1" />
    </div>
  );
}
