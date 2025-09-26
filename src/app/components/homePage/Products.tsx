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
      <div className="flex items-end gap-6 mb-[5rem]">
        <h1 className="text-black text-[3rem] font-black">
          {t("ProductTitle")}
        </h1>
        <p className="text-black text-[1rem] font-medium">
          {t("renewable")}.{t("biodegradable")}.{t("egyptian")}.
        </p>
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
