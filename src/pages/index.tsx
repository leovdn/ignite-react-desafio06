import { Box, Divider, Text } from "@chakra-ui/react"
import * as PrismicH from "@prismicio/helpers"
import type { GetStaticProps } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes/TravelTypes"
import { continentsBanner } from "../utils/continentsBanner"
import Head from "next/head"
import Carousel from "../components/Carousel/CarouselContainer"
import { getPrismicClient } from "../services/prismic"

type ImageProps = {
  alt: string
  url: string
}

type BannerProps = {
  bg: ImageProps
  title: string
  description: string
}

export type TravelTypeProps = {
  icon: ImageProps
  description: string
}

interface HomeResponseProps {
  slug: string
  banner: BannerProps[]
  travelTypes: TravelTypeProps[]
  carouselHeadingTitle: string
  carouselHeadingSubtitle: string
}

interface HomePageProps {
  home: HomeResponseProps
}

const Home = ({ home }: HomePageProps) => {
  const continentsMock = continentsBanner

  console.log(home)
  return (
    <Box>
      <Head>
        <title>Worldtrip | Faça sua viagem</title>
      </Head>

      <Header isHome />

      <BannerHome />

      <Box px={["1rem", "1.5rem"]} maxWidth={1160} mx="auto">
        <TravelTypes types={home.travelTypes} />

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
          {home.carouselHeadingTitle} <br />
          {home.carouselHeadingSubtitle}
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
  const homeResponse = await prismic.getByUID("home", "home")

  const home = {
    slug: homeResponse.uid,
    banner: homeResponse.data.banner.map((banner) => {
      return {
        bg: banner.image,
        title: PrismicH.asText(banner.title),
        description: PrismicH.asText(banner.description),
      }
    }),
    travelTypes: homeResponse.data.travelTypes.map((type) => {
      return {
        icon: type.icon,
        description: PrismicH.asText(type.description),
      }
    }),
    carouselHeadingTitle: PrismicH.asText(
      homeResponse.data.carouselHeadingTitle
    ),
    carouselHeadingSubtitle: PrismicH.asText(
      homeResponse.data.carouselHeadingSubtitle
    ),
  }

  return {
    props: {
      home,
    },
    revalidate: 1800, //30 minutos
  }
}
