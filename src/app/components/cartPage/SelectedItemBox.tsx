import Image from "next/image";

export function SelectedItemBox({
  img,
  name,
  que,
  price,
  productId,
  onRemove,
  onUpdateQuantity,
}: {
  img: string;
  name: string;
  que: number;
  price: number;
  productId: string;
  onRemove: () => void;
  onUpdateQuantity: (newQuantity: number) => void;
}) {
  const handleIncrease = () => {
    onUpdateQuantity(que + 1);
  };

  const handleDecrease = () => {
    if (que > 1) {
      onUpdateQuantity(que - 1);
    }
  };

  return (
    <div className="flex w-full items-center justify-between gap-[1.5rem] shadow-md rounded-[1rem] bg-white py-[1rem] px-[1.5rem] mb-4">
      {/* Product Info */}
      <div className="flex items-center gap-[2rem] flex-1">
        <img
          alt="product image"
          src={`https://api.growwe.com/uploads/${img}`}
          className="w-full h-full max-w-[8rem] rounded-lg"
        />
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold text-black">{name}</p>
          <p className="text-sm text-gray-600">
            {price} EGP <span className="text-gray-400">per unit</span>
          </p>
        </div>
      </div>

      {/* Quantity Controls & Price */}
      <div className="flex items-center gap-[2rem]">
        {/* Quantity Controls */}
        <div className="flex items-center gap-3 border border-gray-300 rounded-full px-4 py-2 bg-gray-50">
          <button
            onClick={handleDecrease}
            disabled={que <= 1}
            className="text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition disabled:opacity-30 disabled:cursor-not-allowed"
          >
            −
          </button>
          <span className="min-w-[2rem] text-center font-semibold text-lg">
            {que}
          </span>
          <button
            onClick={handleIncrease}
            className="text-xl font-bold w-8 h-8 flex items-center justify-center hover:bg-gray-200 rounded-full transition"
          >
            +
          </button>
        </div>

        {/* Total Price */}
        <p className="text-lg font-bold text-[#426B1F] min-w-[8rem] text-right">
          {(price * que).toFixed(2)} EGP
        </p>

        {/* Remove Button */}
        <button
          onClick={onRemove}
          className="hover:scale-110 transition-transform"
          title="Remove from cart"
        >
          <Image
            alt="remove item"
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
