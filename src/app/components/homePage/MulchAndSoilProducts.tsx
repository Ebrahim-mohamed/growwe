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
import Image from "next/image";
import Link from "next/link";
import { productSectionType } from "@/app/types/types";

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
    <div className="flex flex-col">
      <div className="flex items-end  gap-2">
        <h2 className="text-[#E5AC71] text-[2.5rem] font-black">
          {t(content.header)}
        </h2>
        <Link
          href={`/${locale}/${content.to}`}
          className="text-[#5B5757] text-[1.2rem] font-normal block mb-[0.5rem]"
        >
          {t(content.link)}
        </Link>
      </div>
      <div className="mt-[1.5rem] relative">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
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
          className="flex gap-4 h-full"
        >
          {content.products.map((product) => (
            <SwiperSlide key={product.id} className="mb-[3rem]">
              <ProductBox {...product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div
          ref={prevRef}
          className="custom-prev text-[2rem] font-bold absolute top-1/2 -left-17 -translate-y-1/2 bg-[#E6E6E6]  rounded-full  flex items-center justify-center cursor-pointer  transition z-10  p-2"
        >
          <Image
            alt="right arrow"
            width={10}
            height={10}
            src="home/leftArrow.svg"
            className="w-[2.3rem]"
          />
        </div>
        <div
          ref={nextRef}
          className="custom-next text-[2rem] font-bold absolute top-1/2 -right-17 -translate-y-1/2 bg-[#E6E6E6]   rounded-full  flex items-center justify-center cursor-pointer  transition z-10 p-2"
        >
          <Image
            alt="right arrow"
            width={10}
            height={10}
            src="home/rightArrow.svg"
            className="w-[2.3rem]"
          />
        </div>
      </div>
    </div>
  );
}
