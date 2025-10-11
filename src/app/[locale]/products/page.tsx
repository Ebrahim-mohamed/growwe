import { Partners } from "@/app/components/homePage/Partners";
import { Hero } from "@/app/components/productsPage/Hero";
import { ProductsSection } from "@/app/components/productsPage/Products";

export default function Products() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <Partners />
    </div>
  );
}
