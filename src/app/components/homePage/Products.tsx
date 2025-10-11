import { useTranslations } from "next-intl";
import { MulchProducts } from "./Mulch.Products";
import { SoilProducts } from "./SoilProducts";

export function Products() {
  const t = useTranslations("homePage.productsSection");
  return (
    <div className="p-[var(--section-Padding)] relative">
      {/* Section Header */}
      <div className="flex flex-col justify-center items-center gap-1 w-full mb-[2rem]">
        <h1 className="text-black text-[3.5rem] font-black">
          {t("ProductTitle")}
        </h1>
        <p className="text-black text-[1rem] font-medium">
          {t("renewable")}.{t("biodegradable")}.{t("egyptian")}.
        </p>
        <div className="bg-[#1010104f] w-full h-[0.1rem] mt-[0.5rem]" />
      </div>
      <SoilProducts />
      <MulchProducts />
    </div>
  );
}
