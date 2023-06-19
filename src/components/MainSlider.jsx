import React from "react";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/MainSlider.css";

export default function MainSlider() {
  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        //   spaceBetween={50}
        slidesPerView={1}
        loop={true}
        // autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        speed={1500}
        pagination={{ clickable: true }}
        //   scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className="mySwiper relative h-screen"
      >
        <div className="scroll absolute bottom-14 font-['Raleway'] left-[30%] z-30">
          <div className="flex items-center justify-center rotate-[-90deg]">
            <span></span>
            <em>Scroll Down</em>
          </div>
        </div>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideTxt">
              <p>
                MungNyang <span>Collection</span>
              </p>
              <h1>
                Comfy & Trendy
                <br />
                MungNyang For My Pet
              </h1>
              <button>Shop Now</button>
            </div>
            <div className="imageBox">
              <img src="/dog7.jpg" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideTxt slt2">
              <p>
                MungNyang <span>Collection</span>
              </p>
              <h1>
                Comfy & Trendy
                <br />
                MungNyang For My Pet
              </h1>
              <button>Shop Now</button>
            </div>
            <div className="imageBox">
              <img src="/dog12.jpg" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideTxt slt3">
              <p>
                MungNyang <span>Collection</span>
              </p>
              <h1>
                Comfy & Trendy
                <br />
                MungNyang For My Pet
              </h1>
              <button>Shop Now</button>
            </div>
            <div className="imageBox">
              <img src="/dog3.jpg" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slideContainer">
            <div className="slideTxt slt4">
              <p>
                MungNyang <span>Collection</span>
              </p>
              <h1>
                Comfy & Trendy
                <br />
                MungNyang For My Pet
              </h1>
              <button>Shop Now</button>
            </div>
            <div className="imageBox">
              <img src="/dog11.jpg" alt="banner" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
