export function MissionAndVisionCard({
  header,
  secHeader,
  des,
}: {
  header: string;
  secHeader: string;
  des: string;
}) {
  return (
    <div className="flex flex-col gap-[0.5rem] max-w-[60%]">
      <h1 className="text-[2.5rem] text-[#E5AC71] font-bold">{header}</h1>
      <h2 className="text-[2rem] text-[#426B1F] font-semibold">{secHeader}</h2>
      <p className="text-[1.8rem] font-normal text-black leading-[2rem]">
        {des}
      </p>
    </div>
  );
}
