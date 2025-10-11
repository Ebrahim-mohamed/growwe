import { Certification } from "@/app/components/aboutPage/Certitifiction";
import { Hero } from "@/app/components/aboutPage/hero";
import { WhoWeAre } from "@/app/components/aboutPage/WhoWeAre";

export default function About() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <Certification />
    </div>
  );
}
