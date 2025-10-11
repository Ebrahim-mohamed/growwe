export function Input({
  label,
  errorMessage,
  place,
  ...props
}: {
  label: string;
  errorMessage?: string;
  place: string;
}) {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-[0.5rem] relative">
      <label className="text-black text-[1.1rem] font-medium">{label}</label>
      {label === "Message" ? (
        <textarea
          {...props}
          placeholder={place}
          className="placeholder:font-normal placeholder:text-[1.1rem] placeholder:text-[#8D8D8D] w-full outline-0 focus:outline-0 max-h-[10rem] min-h-[2rem]"
        />
      ) : (
        <input
          {...props}
          placeholder={place}
          className="placeholder:font-normal placeholder:text-[1.1rem] placeholder:text-[#8D8D8D] w-full outline-0 focus:outline-0"
        />
      )}
      <div className="w-full h-[0.02rem] bg-[#8D8D8D]"></div>
      {errorMessage && (
        <p className="absolute bottom-[-1.5rem] left-0  text-red-800 font-medium text-[0.8rem]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
