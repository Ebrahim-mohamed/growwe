import Image from "next/image";

export function SelectedItemBox({
  img,
  name,
  que,
  price,
  onRemove,
}: {
  img: string;
  name: string;
  que: number;
  price: number;
  onRemove: () => void;
}) {
  return (
    <div className="flex w-full items-center justify-between gap-[1.5rem] shadow rounded-[1rem] bg-white py-[0.8rem] px-[1.5rem]">
      <div className="flex items-center gap-[2rem]">
        <Image
          alt="product image"
          width={120}
          height={120}
          src={`/cart/${img}.png`}
          className="max-w-[8rem] aspect-square"
        />
        <p>{name}</p>
      </div>

      <div className="flex items-center gap-[2rem]">
        <p>{que}</p>
        <p>{price * que} EGP</p>

        <button onClick={onRemove}>
          <Image
            alt="garbage image"
            width={30}
            height={30}
            src="/cart/trash.png"
            className="cursor-pointer"
          />
        </button>
      </div>
    </div>
  );
}
