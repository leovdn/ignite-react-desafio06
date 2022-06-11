import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import SwiperItem, { SwiperItemProps } from "./SwiperItem"

interface SwiperContainerProps {
  data: SwiperItemProps[]
}

export default function SwiperContainer({ data }: SwiperContainerProps) {
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
          <SwiperItem
            title={item.title}
            description={item.description}
            img={item.img}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
