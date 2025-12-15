"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";
import { Product } from "@/types/product";
import { api } from "@/lib/api";

export function ProductsSection() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api("/products").then(setProducts);
  }, []);

  return (
    <div>
      {products.map((p, i) => (
        <ProductCard key={p._id} product={p} productOrder={i} />
      ))}
    </div>
  );
}
