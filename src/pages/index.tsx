import { Box, Divider, Text } from "@chakra-ui/react"

import type { GetStaticProps, NextPage } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes/TravelTypes"
import { continentsBanner } from "../utils/continentsBanner"
import Head from "next/head"
import Carousel from "../components/Carousel/CarouselContainer"
import { getPrismicClient } from "../services/prismic"

const Home: NextPage = (props) => {
  const continentsMock = continentsBanner

  console.log(props)
  return (
    <Box>
      <Head>
        <title>Worldtrip | Faça sua viagem</title>
      </Head>

      <Header isHome />

      <BannerHome />

      <Box px={["1rem", "1.5rem"]} maxWidth={1160} mx="auto">
        <TravelTypes />

        <Divider
          borderColor="dark.text"
          mx="auto"
          mt={["2.25rem", "3rem", "4rem", "5rem"]}
          w="6rem"
        />

        <Text
          textAlign="center"
          color="dark.text"
          fontSize={["1.25rem", "1.5rem", "2rem", "2.25rem"]}
          fontWeight="500"
          mt={["1.5rem", "2rem", "3rem", "3.5rem"]}
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Box
          h={["250px", "300px", "400px", "450px"]}
          my={["1.25rem", "1.5rem", "2.25rem", "3.2rem"]}
        >
          <Carousel data={continentsMock} />
        </Box>
      </Box>
    </Box>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  const continentsResponse = await prismic.getByType("home")

  const continents = continentsResponse.results.map((continent) => {
    return {
      slug: continent.uid,
      data: continent.data.banner,
    }
  })

  return {
    props: {
      continents,
    },
    revalidate: 1800, //30 minutos
  }
}
