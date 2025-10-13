import { Partners } from "@/app/components/homePage/Partners";
import { Calculator } from "@/app/components/productsPage/Calculator";
import { Hero } from "@/app/components/productsPage/Hero";
import { ProductsSection } from "@/app/components/productsPage/Products";

export default function Products() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <Calculator />
      <Partners />
    </div>
  );
}
