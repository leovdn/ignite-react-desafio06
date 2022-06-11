import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import type { NextPage } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes"

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <BannerHome />

      <Box p="2rem">
        <TravelTypes />
        <Divider borderColor="dark.text" mx="auto" mt="5rem" w="6rem" />

        <Box h={450} mt="3.2rem">
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
            <SwiperSlide>
              <Image src="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
