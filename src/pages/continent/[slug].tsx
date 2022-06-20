import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import { PrismicRichText } from "@prismicio/react"
import * as PrismicH from "@prismicio/helpers"
import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import { useEffect } from "react"
import { createClient } from "../../../prismicio"
import { ContinentInfo, ContinentPage } from "../../../slices"
import BannerPage from "../../components/BannerPage"
import CityCard from "../../components/CityCard/CityCard"
import { Header } from "../../components/Header"
import NumberHighlight from "../../components/NumberHighlight/NumberHighlight"
import { getPrismicClient } from "../../services/prismic"

type ImageProps = {
  alt: string
  url: string
}

type ContinentInfoProps = {
  description: string
  languagesAmount: string
  topCitiesAmount: string
  coutriesAmount: string
}

interface CityProps {
  name: string
  country: string
  flag: ImageProps
  image: ImageProps
}
interface ContinentProps {
  continent: {
    slug: string
    title: string
    banner: ImageProps
    cities: CityProps[]
    info: ContinentInfoProps[]
  }
}

export default function Continent({ continent }: ContinentProps) {
  console.log(continent)

  return (
    <Box>
      <Head>
        <title>Worldtrip | {continent.title}</title>
      </Head>

      <Header />

      <BannerPage />

      <Box
        px="2rem"
        maxWidth={1160}
        mx="auto"
        mt={["1.5rem", "2rem", "3rem", "5rem"]}
      >
        <Flex
          alignItems={["flex-start", "flex-start", "center"]}
          flexDirection={["column", "column", "row"]}
          gap={["1rem", "1rem", "4rem"]}
        >
          <Text
            as="p"
            flex="1"
            color="dark.text"
            fontSize={["0.875rem", "0.875rem", "1rem", "1.3rem"]}
            fontWeight="400"
            textAlign="justify"
          >
            {continent.info[0].description}
          </Text>

          <HStack flex="1" spacing={["2.5rem", "3rem", "4rem"]}>
            <NumberHighlight
              amount={continent.info[0].coutriesAmount}
              subject="países"
            />
            <NumberHighlight
              amount={continent.info[0].languagesAmount}
              subject="línguas"
            />
            <NumberHighlight
              amount={continent.info[0].topCitiesAmount}
              subject="cidades +100"
            />
          </HStack>
        </Flex>

        <Text
          fontSize={["1.5rem", "1.75rem", "2.25rem"]}
          mt={["2rem", "3rem", "5rem"]}
          color="dark.text"
          fontWeight="500"
        >
          Cidades +100
        </Text>

        <Flex
          my={["1.25rem", "1.5rem", "2rem"]}
          wrap="wrap"
          gap={["1.25rem", "1.5rem"]}
          flexDirection={["column", "column", "row"]}
          align={["center", "center", "flex-start"]}
        >
          {continent.cities.map((city) => (
            <CityCard
              key={city.name}
              img={city.image.url}
              name={city.name}
              country={city.country}
              flag={city.flag.url}
            />
          ))}
        </Flex>
      </Box>
    </Box>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export async function getStaticProps({ params }: any) {
  const prismic = getPrismicClient({})
  const response = await prismic.getByUID("continent", String(params.slug), {})

  const continent = {
    slug: response.uid,
    title: PrismicH.asText(response.data.title),
    banner: response.data.banner,
    info: response.data.info.map((city) => {
      return {
        topCitiesAmount: PrismicH.asText(city.CountriesTopCities),
        languagesAmount: PrismicH.asText(city.countriesLanguages),
        coutriesAmount: PrismicH.asText(city.countriesNumber),
        description: PrismicH.asText(city.desc),
      }
    }),
    cities: response.data.cities.map((city) => {
      return {
        image: city.cityImage,
        name: PrismicH.asText(city.cityName),
        country: PrismicH.asText(city.cityCountry),
        flag: city.countryFlag,
      }
    }),
  }

  return {
    props: { continent }, // Will be passed to the page component as props
  }
}
