import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Carousel: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-700 to-blue-500">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="h-[400px]"
      >
        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('src/assets/Carousel1.jpg')",
            }}
          >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('src/assets/Carousel2.jpg')",
            }}
          >
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full bg-cover bg-center flex items-center justify-center"
            style={{
              backgroundImage: "url('src/assets/Carousel3.jpg')",
            }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;