"use client";
import { useTranslations } from "next-intl";
import { MostUseHeader } from "../MostUseHeader";
import { useState, useEffect } from "react";

export function Calculator() {
  const t = useTranslations("products.calculator");

  const [type, setType] = useState<"mulch" | "peat" | "">("");
  const [width, setWidth] = useState<number | "">("");
  const [length, setLength] = useState<number | "">("");
  const [depth, setDepth] = useState<number | "">("");
  const [result, setResult] = useState<number>(0);

  // ✅ Automatically recalculate whenever inputs or type change
  useEffect(() => {
    if (!width || !length || !depth || !type) {
      setResult(0);
      return;
    }

    // Convert to cubic meters (if inputs are in cm)
    const volume = (Number(width) * Number(length) * Number(depth)) / 1000000;

    // Bag volume per type
    const bagVolume = type === "mulch" ? 0.05 : 0.04; // adjust as needed

    const numberOfBags = Math.ceil(volume / bagVolume);
    setResult(numberOfBags);
  }, [width, length, depth, type]);

  return (
    <div className="px-[var(--section-Padding)] py-[3rem]">
      <MostUseHeader header={t("title")} des={t("des")} />

      <div className="flex w-full justify-between gap-[2rem] mt-[3rem] flex-col lg:flex-row">
        {/* Type Selection */}
        <div className="flex flex-col gap-[0.5rem]">
          <h1 className="text-[2rem] font-normal text-black">
            {t("selection")}
          </h1>
          <form className="flex flex-col gap-[0.5rem]">
            <div className="flex items-center gap-[1rem]">
              <input
                type="radio"
                id="peat"
                name="type"
                value="peat"
                checked={type === "peat"}
                onChange={() => setType("peat")}
              />
              <label
                htmlFor="peat"
                className="text-black text-[2rem] font-normal"
              >
                {t("peat")}
              </label>
            </div>

            <div className="flex items-center gap-[1rem]">
              <input
                type="radio"
                id="mulch"
                name="type"
                value="mulch"
                checked={type === "mulch"}
                onChange={() => setType("mulch")}
              />
              <label
                htmlFor="mulch"
                className="text-black text-[2rem] font-normal"
              >
                {t("mulch")}
              </label>
            </div>
          </form>
        </div>

        {/* Inputs and Result */}
        <div className="flex flex-1 justify-between gap-[2.5rem] flex-wrap mb-[2.1rem]">
          {[
            { label: t("width"), value: width, setter: setWidth },
            { label: t("length"), value: length, setter: setLength },
            { label: t("depth"), value: depth, setter: setDepth },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-w-[200px]"
            >
              <h1 className="text-[2rem] font-normal text-black">
                {item.label}
              </h1>
              <input
                type="number"
                value={item.value}
                onChange={(e) =>
                  item.setter(e.target.value ? Number(e.target.value) : "")
                }
                className="w-full border-[2px] border-[#E6E7ED] rounded-[1.25rem] text-[1.5rem] font-medium py-[0.5rem] px-[1rem] outline-0"
              />
            </div>
          ))}

          {/* Result */}
          <div className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-w-[200px]">
            <h1 className="text-[2rem] font-normal text-black">
              {t("numberOfBags")}
            </h1>
            <div className="w-full  bg-[#F8FFF5] border-[2px] border-[#E6E7ED] rounded-[1.25rem] text-[1.5rem] font-medium py-[0.5rem] px-[1rem] text-center">
              {result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
