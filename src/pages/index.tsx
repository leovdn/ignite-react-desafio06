import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"

import type { NextPage } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes"
import SwiperContainer from "../components/Swiper/SwiperContainer"
import { continentsBanner } from "../utils/continentsBanner"

const Home: NextPage = () => {
  const continents = continentsBanner

  return (
    <Box>
      <Header />
      <BannerHome />

      <Box p="2rem" maxWidth={1160} mx="auto">
        <TravelTypes />
        <Divider borderColor="dark.text" mx="auto" mt="5rem" w="6rem" />

        <Text
          textAlign="center"
          color="dark.text"
          fontSize="2.25rem"
          fontWeight="500"
          mt="3.5rem"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Box h={450} mt="3.2rem">
          <SwiperContainer data={continents} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
