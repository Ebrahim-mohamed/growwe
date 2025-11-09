import { useLocale } from "next-intl";

export function Input({
  label,
  errorMessage,
  place,
  type,
  ...props
}: {
  label: string;
  errorMessage?: string;
  place: string;
  type?: string;
}) {
  const locale = useLocale();
  return (
    <div className="w-full flex flex-col items-start justify-start gap-[0.5rem] relative">
      <label
        className={`text-black ${
          locale === "en"
            ? " placeholder:text-[1.1rem] "
            : " placeholder:text-[1.3rem] "
        } font-medium`}
      >
        {label}
      </label>
      {label === "Message" ? (
        <textarea
          {...props}
          placeholder={place}
          className={`placeholder:font-normal ${
            locale === "en"
              ? " placeholder:text-[1.1rem] "
              : " placeholder:text-[1.3rem] "
          } placeholder:text-[#8D8D8D] w-full outline-0 focus:outline-0 max-h-[10rem] min-h-[2rem]`}
        />
      ) : (
        <input
          {...props}
          type={type}
          placeholder={place}
          className={`placeholder:font-normal ${
            locale === "en"
              ? " placeholder:text-[1.1rem] "
              : " placeholder:text-[1.3rem] "
          } placeholder:text-[#8D8D8D] w-full outline-0 focus:outline-0`}
        />
      )}
      <div className="w-full h-[0.02rem] bg-[#8D8D8D]"></div>
      {errorMessage && (
        <p
          className={`absolute bottom-[-1.5rem] ${
            locale == "en" ? " left-0 " : " right-0 "
          }  text-red-800 font-medium ${
            locale === "en" ? " text-[0.8rem] " : " text-[1rem] "
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
