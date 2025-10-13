import { useTranslations } from "next-intl";
import { MostUseHeader } from "../MostUseHeader";
import { ProductCard } from "./ProductCard";
const products = [
  {
    id: "1",
    name: "Soil Alternative Compressed",
    price: 350,
    des: "Boosts plant growth with superior water retention (10x its weight) and natural aeration for healthier roots, while being 100% organic, sustainable, and biodegradable—reducing irrigation needs and soil depletion.Perfect for gardening, farming, and eco-conscious growers seeking a chemical-free, renewable alternative to traditional soil! 🌱♻️",
    size: 5,
    type: "Block",
    quantity: 12,
    img: "product",
  },
  {
    id: "2",
    name: "Soil Alternative Compressed",
    price: 350,
    des: "Boosts plant growth with superior water retention (10x its weight) and natural aeration for healthier roots, while being 100% organic, sustainable, and biodegradable—reducing irrigation needs and soil depletion.Perfect for gardening, farming, and eco-conscious growers seeking a chemical-free, renewable alternative to traditional soil! 🌱♻️",
    size: 5,
    type: "Block",
    quantity: 12,
    img: "product",
  },
  {
    id: "3",
    name: "Soil Alternative Compressed",
    price: 350,
    des: "Boosts plant growth with superior water retention (10x its weight) and natural aeration for healthier roots, while being 100% organic, sustainable, and biodegradable—reducing irrigation needs and soil depletion.Perfect for gardening, farming, and eco-conscious growers seeking a chemical-free, renewable alternative to traditional soil! 🌱♻️",
    size: 5,
    type: "Block",
    quantity: 12,
    img: "product",
  },
  {
    id: "4",
    name: "Soil Alternative Compressed",
    price: 350,
    des: "Boosts plant growth with superior water retention (10x its weight) and natural aeration for healthier roots, while being 100% organic, sustainable, and biodegradable—reducing irrigation needs and soil depletion.Perfect for gardening, farming, and eco-conscious growers seeking a chemical-free, renewable alternative to traditional soil! 🌱♻️",
    size: 5,
    type: "Block",
    quantity: 12,
    img: "product",
  },
];
export function ProductsSection() {
  const t = useTranslations("products.productsSection");
  return (
    <div className="p-[var(--section-Padding)]">
      <MostUseHeader header={t("products")} />
      <div className="flex flex-col w-full mt-[3rem] gap-[1rem]">
        {products.map((product, index) => (
          <ProductCard
            // des={product.des}
            // id={product.id}
            // img={product.img}
            // name={product.name}
            // price={product.price}
            // quantity={product.quantity}
            // size={product.size}
            // type={product.type}
            // key={product.id}
            {...product}
            key={product.id}
            productOrder={index}
          />
        ))}
      </div>
    </div>
  );
}
