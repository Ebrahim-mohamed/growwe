import { mirza } from "@/app/[locale]/layout";
export function MostUseHeader({
  header,
  des,
  isNOtWhite,
}: {
  header: string;
  des?: string;
  isNOtWhite?: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1
        className={` font-bold mb-[-0.5rem] ${
          header !== "Calculator" && mirza.className
        } ${
          header === "Calculator" || isNOtWhite
            ? " text-[#E5AC71] text-[4.5rem] "
            : " text-black text-[3.5rem] "
        }`}
      >
        {header}
      </h1>
      {des && <p className="text-[#717171] text-[1.5rem] font-medium">{des}</p>}
    </div>
  );
}
