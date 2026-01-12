"use client";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useLocale } from "next-intl";

type PhoneInputFieldProps = {
  value: string | undefined;
  onChange: (value: string | undefined) => void;
  errorMessage?: string;
  label: string;
};

export function PhoneInputField({
  value,
  onChange,
  errorMessage,
  label,
}: PhoneInputFieldProps) {
  const locale = useLocale();

  return (
    <div className="w-full flex flex-col gap-[0.5rem] relative">
      <label
        className={`text-black font-medium ${
          locale === "en"
            ? "placeholder:text-[1.5rem]"
            : "placeholder:text-[1.3rem]"
        }`}
      >
        {label}
      </label>

      <PhoneInput
        international
        defaultCountry="EG"
        value={value}
        onChange={onChange}
        className="w-full border-b text-[1.2rem] outline-0 focus:outline-0"
      />

      {errorMessage && (
        <p
          className={`absolute bottom-[-1.5rem] ${
            locale === "en" ? "left-0" : "right-0"
          } text-red-800 font-medium ${
            locale === "en" ? "text-[0.8rem]" : "text-[1rem]"
          }`}
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
