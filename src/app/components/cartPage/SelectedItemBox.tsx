import Image from "next/image";

export function SelectedItemBox({
  img,
  name,
  que,
  price,
}: {
  img: string;
  name: string;
  que: number;
  price: number;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-[1.5rem] [box-shadow:0_1px_4px_0_rgba(0,0,0,0.25)] rounded-[1rem] bg-white py-[0.8rem] px-[1.5rem]">
      <div className="flex items-center gap-[2rem]">
        <Image
          alt="product image"
          width={400}
          height={400}
          src={`/cart/${img}.png`}
          className="max-w-[8rem] aspect-square"
        />
        <p>{name}</p>
      </div>
      <div className="flex items-center gap-[2rem]">
        <div>
          <p>{que}</p>
        </div>
        <p>{price} EGP</p>
        <Image
          alt="garbage image"
          width={400}
          height={400}
          src="/cart/trash.png"
          className="w-[2.5rem] aspect-square"
        />
      </div>
    </div>
  );
}
