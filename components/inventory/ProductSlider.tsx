"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";


export default function ProductSlider() {

  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const photos = [
    "f1.png",
    "f6.png",
    "f2.png",
    "f3.png",
    "f4.png",
    "f5.png",
  ];

  const videos = [
    "f5.png",
    "f3.png",
    "f4.png",
    "f1.png",
    "f6.png",
    "f5.png",
  ];

  const activeImages = activeTab === "photos" ? photos : videos;

  return (
    <>
      {/* MAIN SLIDER */}
      <div className="border border-light-gray py-[43px] px-[38px] rounded-[15px] mb-[25px]">
        <div>
          <Swiper
            modules={[Navigation, Thumbs]}
            thumbs={{ swiper: thumbsSwiper }}
          >
            {activeImages.map((img, i) => (
              <SwiperSlide key={i}   className="cursor-grab active:cursor-grabbing">
                <Image
                  src={`/assets/${img}`}
                  alt="detail-image"
                  width={0}
                  height={0}
                  loading="eager"
                  priority    
                  sizes="100vw"
                  className="w-full h-auto max-w-[623px] mx-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* TABS */}
      <div className="flex border rounded-xl overflow-hidden w-full border-light-gray mb-[25px]">
        <button
          onClick={() => setActiveTab("photos")}
          className={`w-1/2 py-2 sm:py-3 font-medium mont-text transition-all duration-200 cursor-pointer ${
            activeTab === "photos"
              ? "bg-green text-white"
              : "bg-white text-gray hover:bg-light-gray/20 hover:text-green"
          }`}
        >
          Photos
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`w-1/2 py-2 sm:py-3 font-medium mont-text transition-all duration-200 cursor-pointer ${
            activeTab === "videos"
              ? "bg-green text-white"
              : "bg-white text-gray hover:bg-light-gray/20 hover:text-green"
          }`}
        >
          Videos
        </button>
      </div>

      {/* THUMBNAIL SLIDER (unchanged design) */}
      <Swiper
        modules={[Thumbs]}
        onSwiper={(swiper) => setThumbsSwiper(swiper)}
        slidesPerView={6}
        spaceBetween={10}
        watchSlidesProgress
        className="mb-[30px] "
        breakpoints={{
            0: { slidesPerView: 3 },       
            480: { slidesPerView: 4 },      // Small tablets
            640: { slidesPerView: 5 },      // Tablets
            1024: { slidesPerView: 6 },     // Desktop
        }}
      >
        {activeImages.map((img, i) => (
          <SwiperSlide key={i}>
            <div className="border border-light-gray flex justify-center items-center w-[98px] h-[98px] rounded-xl cursor-pointer">
               <Image
              src={`/assets/${img}`}
              alt="detail"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
