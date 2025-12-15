"use client";

import { useRef, useEffect } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import type { NavigationOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useLocale, useTranslations } from "next-intl";
import { ProductBox } from "./ProductBox";

export type productSectionType = {
  header: string; // 'soil' | 'mulch'
  link: string;
  to: string;
  products: {
    id: string;
    header: string;
    description: string;
    type: string;
    price: string;
    img: string;
  }[];
};

export function MulchAndSoilProducts(content: productSectionType) {
  const t = useTranslations("homePage.productsSection");
  const locale = useLocale();

  // ✅ Refs for navigation buttons
  const prevRef = useRef<HTMLDivElement | null>(null);
  const nextRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="flex flex-col mb-[2rem]">
      <div className="flex items-end gap-2">
        <h2
          className={`text-[#E5AC71] text-[2.5rem] font-black min-[500px]:flex items-end w-full ${
            locale === "en"
              ? " min-[600px]:ml-[12rem] "
              : " min-[600px]:mr-[12rem] "
          }`}
        >
          {t(content.header)}
          <a
            href={`/${locale}/${content.to}`}
            className="text-[#5B5757] text-[1.2rem] font-normal block mb-[0.5rem] pl-[0.5rem]"
          >
            {t(content.link)}
          </a>
        </h2>
      </div>

      {content.products.length === 0 ? (
        <p className="text-center text-gray-500 mt-4">
          {content.header === "soil"
            ? locale === "en"
              ? "No soil products available."
              : "لا توجد منتجات تربة متاحة."
            : locale === "en"
            ? "No mulch products available."
            : "لا توجد منتجات نشارة متاحة."}
        </p>
      ) : (
        <div className="mt-[1.5rem] relative min-[600px]:px-[10rem]">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={-15}
            slidesPerView={3}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="flex gap-4 h-full items-center justify-center"
          >
            {content.products.map((product) => (
              <SwiperSlide
                key={product.id}
                className="mb-[3rem] !items-center !justify-center !flex"
              >
                <ProductBox {...product} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <div
            ref={prevRef}
            className="custom-prev text-[2rem] font-bold absolute top-1/2 -left-0 max-[1000px]:-left-7 -translate-y-1/2 bg-[#E6E6E6] rounded-full flex items-center justify-center cursor-pointer transition z-10 p-2"
          >
            &lt;
          </div>
          <div
            ref={nextRef}
            className="custom-next text-[2rem] font-bold absolute top-1/2 -right-0 max-[1000px]:-right-7 -translate-y-1/2 bg-[#E6E6E6] rounded-full flex items-center justify-center cursor-pointer transition z-10 p-2"
          >
            &gt;
          </div>
        </div>
      )}
    </div>
  );
}
