import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const PrintApartments = ({ images }) => {

  const imageSwiper = images && images.length > 0 ? images.map((image, index) => <SwiperSlide className="flex justify-center items-center" key={index}><img className="w-full h-48 object-cover" src={image} alt={image} /></SwiperSlide>) : <SwiperSlide className="flex justify-center items-center"><img className="w-full h-48 object-cover" src='https://placehold.co/600x400' alt='placeholder' /></SwiperSlide>


  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="apartments-swiper"
      >
        {imageSwiper}
      </Swiper>
    </>
  )
}

export default PrintApartments