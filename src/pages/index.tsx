import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Header } from "../components/Header"
import BannerHome from "../components/BannerHome"
import TravelTypes from "../components/TravelTypes"

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <BannerHome />

      <TravelTypes />
    </Box>
  )
}

export default Home
