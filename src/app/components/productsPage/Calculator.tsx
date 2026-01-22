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

  useEffect(() => {
    if (!width || !length || !depth || !type) {
      setResult(0);
      return;
    }

    const L = Number(length);
    const W = Number(width);
    const D = Number(depth);

    let calculatedBags = 0;

    if (type === "mulch") {
      calculatedBags = (L * W * D * 75) / 100;
    } else if (type === "peat") {
      calculatedBags = (L * W * D * 100) / 500;
    }

    setResult(Math.ceil(calculatedBags));
  }, [width, length, depth, type]);

  return (
    <div className="p-[var(--section-Padding)] pb-[7rem] ">
      <MostUseHeader header={t("title")} des={t("des")} />

      <div className="flex w-full justify-between gap-[2rem] mt-[3rem] flex-col lg:flex-row">
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

        <div className="flex flex-1 justify-between gap-[2.5rem] flex-wrap mb-[2.1rem]">
          {[
            {
              label: t("width"),
              unit: t("meterUnit"),
              value: width,
              setter: setWidth,
            },
            {
              label: t("length"),
              unit: t("meterUnit"),
              value: length,
              setter: setLength,
            },
            {
              label: t("depth"),
              unit: t("centiUnit"),
              value: depth,
              setter: setDepth,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-w-[200px]"
            >
              <h1 className="text-[2rem] font-normal text-black">
                {item.label}{" "}
                <span className="text-[1.5rem] text-[#777]">{item.unit}</span>
              </h1>
              <input
                type="number"
                value={item.value}
                onChange={(e) =>
                  item.setter(e.target.value ? Number(e.target.value) : "")
                }
                className="w-full border-[2px] min-h-[5rem]  border-[#E6E7ED] rounded-[1.25rem] text-[1.5rem] font-medium py-[0.5rem] px-[1rem] outline-0"
              />
            </div>
          ))}

          <div className="flex flex-1 flex-col items-center justify-center gap-[1rem] min-w-[200px]">
            <h1 className="text-[2rem] font-normal text-black">
              {type === "mulch" ? t("numberOfBags") : t("numberOfMeter")}
            </h1>
            <div className="w-full bg-[#F8FFF5] min-h-[5rem] flex items-center justify-center border-[2px] border-[#E6E7ED] rounded-[1.25rem] text-[1.5rem] font-medium py-[0.5rem] px-[1rem] text-center">
              {result}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
