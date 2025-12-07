import { Hero } from "../components/homePage/Hero";
import { Mulch } from "../components/homePage/Mulch";
import { MulchFeatures } from "../components/homePage/MulchFeature";
import { NewsSection } from "../components/homePage/News";
import { Partners } from "../components/homePage/Partners";
import { Plants } from "../components/homePage/Plants";
import { Products } from "../components/homePage/Products";
import { Smarter } from "../components/homePage/Smarter";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Products />
      <Smarter />
      <Plants />
      <Mulch />
      <MulchFeatures />
      <Partners isHome />
      <NewsSection />
    </div>
  );
}
