"use client";

import { clsx } from "clsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Image from "next/image";

export function MayfairSlider({ items, className, ...props }) {
  return (
    <Swiper navigation={true} modules={[Navigation]} className={clsx("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-[600px] max-h-full", "mySwiper")} {...props}>
      {items &&
        items.map((item) => (
          <SwiperSlide key={item.title}>
            <span className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow h-[600px] max-h-full">
              <Image src={item.url} alt={item.title} width={800} height={600} className="absolute inset-0 h-[600px] max-h-full w-full object-scale-down group-hover:scale-105 transition-transform duration-500 ease-in-out" />
              <div className="absolute inset-0 bg-gradient-to-b from-gray-200/25 to-gray-200/5"></div>
              <span className="z-10 text-2xl font-medium text-white absolute top-5 bg-black bg-opacity-40 left-5 p-4 xs:text-xl md:text-3xl drop-shadow capitalize">{item.title}</span>
            </span>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}
