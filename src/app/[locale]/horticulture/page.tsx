import { BestCrops } from "@/app/components/horticulture/BestCrops";
import { CardsSection } from "@/app/components/horticulture/CardsSection";
import { HorticultureSection } from "@/app/components/horticulture/HorticultureSection";
import { Hero } from "@/app/components/horticulture/Hero";
import { ThirdSection } from "@/app/components/horticulture/ThirdSection";

export default function Horticulture() {
  return (
    <div>
      <Hero />
      <HorticultureSection />
      <ThirdSection />
      <CardsSection />
      <BestCrops />
    </div>
  );
}
