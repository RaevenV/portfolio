import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SwiperComponentProps = {
  styles: string;
};

const SwiperComponent: React.FC<SwiperComponentProps> = ({ styles }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      className={`${styles}`} 
    >
      <SwiperSlide className="flex items-center justify-center bg-blue-500">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-red-500">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="flex items-center justify-center bg-green-500">
        Slide 3
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
