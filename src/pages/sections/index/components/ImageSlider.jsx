import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import styles from './ImageSlider.module.css'

const ImageSlider = () => {
  return (
    <div className={styles.slider}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src="/images/header1.webp" alt="Underwater 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/header2.webp" alt="Underwater 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/header3.jpg" alt="Underwater 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/header4.jpg" alt="Underwater 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ImageSlider
