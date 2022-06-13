import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import CarouselItem, { CarouselItemProps } from "./CarouselItem"

interface CarouselProps {
  data: CarouselItemProps[]
}

export default function Carousel({ data }: CarouselProps) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {data.map((item) => (
        <SwiperSlide key={item.title}>
          <CarouselItem
            title={item.title}
            slug={item.slug}
            description={item.description}
            img={item.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
