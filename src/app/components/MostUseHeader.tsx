export function MostUseHeader({
  header,
  des,
}: {
  header: string;
  des?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-black text-[3rem] font-bold mb-[-0.5rem]">
        {header}
      </h1>
      {des && <p className="text-[#717171] text-[1.5rem] font-medium">{des}</p>}
    </div>
  );
}
