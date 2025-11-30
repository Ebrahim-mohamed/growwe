"use client";

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
  const isMessage = label.toLowerCase().includes("message");

  return (
    <div className="w-full flex flex-col items-start justify-start gap-[0.5rem] relative">
      <label
        className={`text-black font-medium ${
          locale === "en" ? "placeholder:text-[1.5rem]" : "placeholder:text-[1.3rem]"
        }`}
      >
        {label}
      </label>

      {isMessage ? (
        <textarea
          {...props}
          placeholder={place}
          className={`placeholder:font-normal w-full outline-0 focus:outline-0 max-h-[10rem] min-h-[2rem] ${
            locale === "en" ? "placeholder:text-[1.5rem]" : "placeholder:text-[1.3rem]"
          } placeholder:text-[#8D8D8D]`}
        />
      ) : (
        <input
          {...props}
          type={type}
          placeholder={place}
          className={`placeholder:font-normal w-full outline-0 focus:outline-0 ${
            locale === "en" ? "placeholder:text-[1.5rem]" : "placeholder:text-[1.3rem]"
          } placeholder:text-[#8D8D8D]`}
        />
      )}

      <div className="w-full h-[0.02rem] bg-[#8D8D8D]"></div>

      {errorMessage && (
        <p
          className={`absolute bottom-[-1.5rem] text-red-800 font-medium ${
            locale === "en" ? "text-[0.8rem] left-0" : "text-[1rem] right-0"
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
