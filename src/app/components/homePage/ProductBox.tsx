"use client";
import { productType } from "@/app/types/types";
import Image from "next/image";

export function ProductBox(product: productType) {
  return (
    <div className="flex flex-col rounded-[1.5rem] border-2 border-[#E6E6E6] bg-[#E6E6E6] flex-1 overflow-hidden h-[38rem]">
      {" "}
      <div>
        <Image
          alt="product image"
          src={product.img}
          width={500}
          height={300}
          className="w-[35.5rem]"
        />
      </div>
      <div className=" p-2.5">
        <div className="flex items-center justify-between gap-2">
          <div className=" font-semibold">
            <h1 className=" text-black text-[1.2rem]">{product.header}</h1>
            <p className="text-[#426B1F] text-[1.25rem]">
              EGP {product.price} / {product.type}
            </p>
          </div>
          <button onClick={() => console.log(product.id)}>
            <Image
              alt="add button"
              src="/add-button.svg"
              width={100}
              height={100}
              className="w-[3.5rem] hover:cursor-pointer"
            />
          </button>
        </div>
        <div className="text-[1rem] text-[#6D6D6D] font-normal">
          {product.description.substring(0, 200)}
        </div>
      </div>
    </div>
  );
}
