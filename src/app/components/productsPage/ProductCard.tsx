"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";

interface IProduct {
  id: string;
  name: string;
  price: number;
  des: string;
  size: number;
  type: string;
  quantity: number;
  img: string;
  productOrder: number;
}
export function ProductCard(product: IProduct) {
  const t = useTranslations("products.productsSection");
  const [chosen, setChosen] = useState(0);
  return (
    <div
      className={`flex items-center justify-center gap-4 w-full relative ${
        product.productOrder % 2 !== 0 && " flex-row-reverse"
      }`}
    >
      <div
        className={` absolute w-dvw top-0 h-full ${
          product.productOrder % 2 !== 0 && " bg-[#FCF7F1]"
        }`}
      ></div>
      <div className="flex-1 z-40">
        <Image
          alt="product image"
          src={`/${product.img}.png`}
          width={500}
          height={700}
          className="w-[100%]"
        />
      </div>
      <div className="flex flex-col h-full justify-between gap-[2rem] flex-1 z-40">
        <div className="text-[3rem]">
          <h1 className="text-[#426B1F]  font-semibold mb-[0.5rem]">
            {product.name}
          </h1>
          <p className="text-[#E5AC71] font-semibold">
            {product.size}Kg {product.type}
          </p>
        </div>
        <div className="text-black text-[1.4rem] font-medium">
          {product.des}
        </div>
        <div className=" flex items-center justify-start gap-[1rem]">
          <p className="text-[2rem]">{t("quantity")}</p>
          <div className="w-[8rem] h-[2rem] rounded-[4rem] border flex items-center justify-between p-[0.5rem] text-[1.5rem]">
            <button
              onClick={() => setChosen((pre) => pre + 1)}
              className="text-[2rem]"
            >
              +
            </button>
            <p>{chosen}</p>
            <button
              onClick={() => setChosen((pre) => pre - 1)}
              className="text-[2rem]"
            >
              -
            </button>
          </div>
          <div className="text-black text-[2rem] font-bold">
            {t("egp")} {product.price}
          </div>
          <button className="px-4 py-2 text-white bg-black rounded-2xl">
            {t("add")}
          </button>
          <button>
            <Image
              alt="cart image"
              src="/products/cart.png"
              width={100}
              height={100}
              className="w-[4rem]"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
