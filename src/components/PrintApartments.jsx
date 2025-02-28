import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const PrintApartments = ({ images }) => {

  const imageSwiper = images.map((image, index) => <SwiperSlide className="flex justify-center items-center" key={index}><img className='aspect-3/2 object-center' src={image} alt={image} /></SwiperSlide>)


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