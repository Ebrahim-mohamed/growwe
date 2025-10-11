export function RadioDiv({ value, ...props }: { value: string }) {
  return (
    <div className="flex items-center gap-[0.5rem]">
      <input type="radio" value={value} id={value} {...props} />
      <label htmlFor={value} className="text-black text-[1rem] font-normal">
        {value}
      </label>
    </div>
  );
}
