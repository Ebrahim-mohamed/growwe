import { useTranslations } from "next-intl";
import { ProductBox } from "./ProductBox";

const products = [
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    brief:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "1",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    brief:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "2",
  },
  {
    header: "Soil Alternative Compressed - 5 Kg Block",
    price: "350",
    type: "Block",
    brief:
      "One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2. One block of compressed soil alternative weighing 5Kg to be expanded by watering to 80m2.",
    img: "/product.png",
    id: "3",
  },
];

export function Products() {
  const t = useTranslations("homePage.productsSection");
  return (
    <div className=" p-[var(--section-Padding)]">
      <div className="flex flex-col justify-center items-center gap-1 w-full mb-[2rem]">
        <h1 className="text-black text-[3.5rem] font-black">
          {t("ProductTitle")}
        </h1>
        <p className="text-black text-[1rem] font-medium">
          {t("renewable")}.{t("biodegradable")}.{t("egyptian")}.
        </p>
        <div className="bg-[#1010104f] w-full h-[0.1rem] mt-[0.5rem]"></div>
      </div>
      <div className="flex  gap-4 ">
        {products.map((product) => (
          <ProductBox
            brief={product.brief}
            header={product.header}
            price={product.price}
            type={product.type}
            id={product.id}
            img={product.img}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
