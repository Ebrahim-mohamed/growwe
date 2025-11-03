import { useTranslations } from "next-intl";
import { SelectedItemBox } from "./SelectedItemBox";
import Link from "next/link";

export function ShoppingSection() {
  const t = useTranslations("cart.shoppingSection");
  return (
    <div className="flex flex-col items-center justify-center gap-[2.5rem] p-[var(--section-Padding)] w-full">
      <h1 className="text-[2.5rem] text-[#1E1E1E] font-bold">{t("title")}</h1>
      <div className="rounded-[2.25rem] p-[2rem] text-black [box-shadow:0_4px_11.7px_0_rgba(0,0,0,0.25)_inset,0_4px_38.8px_0_rgba(0,0,0,0.25)] w-[80%]">
        <div className="w-full flex justify-start">
          <Link
            className="text-[1.5rem] font-semibold flex items-center gap-[1rem] justify-center"
            href={`#`}
          >
            <p className="text-[3rem]">&#x2039;</p>
            <p className="mt-[0.4rem]">{t("return")}</p>
          </Link>
        </div>
        <div className="w-full h-[0.1rem] bg-[#D0CFCF] mt-[1rem]"></div>
        <div className="p-[3rem]">
          <div className="font-medium">
            <h3 className="text-[1.5rem]">{t("cartHead")}</h3>
            <p className="text-[1rem]">{t("itemsNumber", { number: 3 })}</p>
            <div className="w-full flex flex-col items-center justify-center gap-[2rem] mt-[2rem]">
              <SelectedItemBox
                img="product"
                name="Peat 5Kg "
                price={320}
                que={1}
              />
              <SelectedItemBox
                img="product"
                name="Peat 5Kg "
                price={320}
                que={1}
              />
              <div className="flex w-full justify-end mt-[1rem]">
                <button className="text-[1.5rem] font-bold text-white bg-black rounded-[1.5rem] py-[0.5rem] px-[1rem] cursor-pointer">
                  {t("checkout")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
