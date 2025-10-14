import { useTranslations } from "next-intl";
import { MulchAndSoilProducts } from "./MulchAndSoilProducts";

const products = [
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "1",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "2",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2. One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "3",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2. One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "4",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "5",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    description:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "6",
  },
];

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
        <div className="bg-[#E6E6E6] w-full h-[0.1rem] mt-[0.5rem]" />
      </div>
      {/* <SoilProducts />
      <MulchProducts /> */}
      <MulchAndSoilProducts
        header="soil"
        link="link"
        to="soilless-growing"
        products={products}
      />
      <div className="bg-[#E6E6E6] w-full h-[0.1rem] my-[2rem]" />
      <MulchAndSoilProducts
        header="mulch"
        link="link"
        to="mulch"
        products={products}
      />
    </div>
  );
}
