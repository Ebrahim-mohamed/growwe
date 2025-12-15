import React, { InputHTMLAttributes } from "react";

type ProductInputProps = {
  label: string;
  errorMessage?: string;
  place?: string;
  type?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function ProductInput({
  label,
  errorMessage,
  place,
  type,
  disabled,
  ...props
}: ProductInputProps) {
  return (
    <div className="w-full flex flex-col gap-2 relative">
      <label className="text-black text-[1rem] font-normal">{label}</label>
      <input
        {...props}
        type={type}
        placeholder={place}
        disabled={disabled}
        className={`bg-[#A0ACB440] placeholder:text-[1rem] placeholder:text-gray-500 w-full border rounded-lg p-3 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      />
      {errorMessage && (
        <p className="absolute bottom-[-1.5rem] left-0 text-red-700 text-[0.9rem]">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
