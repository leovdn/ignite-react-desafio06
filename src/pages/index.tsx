import { Box, Flex, Image, Text } from "@chakra-ui/react"
import type { NextPage } from "next"
import { Header } from "../components/Header"
import Bg from "../../public/assets/bg.png"
import BannerHome from "../components/BannerHome"

const Home: NextPage = () => {
  return (
    <Box>
      <Header />
      <BannerHome />
      <Box maxWidth={1160} mx="auto">
        <Text>TESTE</Text>
      </Box>
    </Box>
  )
}

export default Home
