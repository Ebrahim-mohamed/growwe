import { Certification } from "@/app/components/aboutPage/Certitifiction";
import { Hero } from "@/app/components/aboutPage/hero";
import { VideoSection } from "@/app/components/aboutPage/VideoSection";
import { WhoWeAre } from "@/app/components/aboutPage/WhoWeAre";

export default function About() {
  return (
    <div>
      <Hero />
      <WhoWeAre />
      <VideoSection />
      <Certification />
    </div>
  );
}
