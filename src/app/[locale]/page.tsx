import { Hero } from "../components/homePage/Hero";
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
      <Partners />
    </div>
  );
}
