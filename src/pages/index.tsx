import { Box, Divider, Text } from "@chakra-ui/react"

import type { NextPage } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes/TravelTypes"
import { continentsBanner } from "../utils/continentsBanner"
import Head from "next/head"
import Carousel from "../components/Swiper/SwiperContainer"

const Home: NextPage = () => {
  const continents = continentsBanner

  return (
    <Box>
      <Head>
        <title>Worldtrip | Faça sua viagem</title>
      </Head>

      <Header />

      <BannerHome />

      <Box px={["1rem", "1.5rem"]} maxWidth={1160} mx="auto">
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
          <Carousel data={continents} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home
