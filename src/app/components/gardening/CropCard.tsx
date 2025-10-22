export function CropCard({ cropName, img }: { cropName: string; img: string }) {
  return (
    <div
      className="flex-1  rounded-[1rem] text-white text-[2rem] font-bold p-[1rem] flex items-end justify-center overflow-hidden min-h-[24rem] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(/gardening/crops/${img}.png)` }}
    >
      <p>{cropName}</p>
    </div>
  );
}
