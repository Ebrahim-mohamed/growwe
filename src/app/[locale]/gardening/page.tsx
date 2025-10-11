import { CardsSection } from "@/app/components/gardening/CardsSection";
import { GardeningSection } from "@/app/components/gardening/GardeningSection";
import { Hero } from "@/app/components/gardening/Hero";
import { ThirdSection } from "@/app/components/gardening/ThirdSection";

export default function Gardening() {
  return (
    <div>
      <Hero />
      <GardeningSection />
      <ThirdSection />
      <CardsSection />
    </div>
  );
}
