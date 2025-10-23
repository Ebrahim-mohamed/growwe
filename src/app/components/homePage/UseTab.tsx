export function UseTab({ use }: { use: string }) {
  return (
    <div className="flex items-center justify-center gap-3 flex-1">
      <p className="text-[2rem] ">{use}</p>
    </div>
  );
}
