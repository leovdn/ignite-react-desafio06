import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Head from "next/head"
import BannerPage from "../../components/BannerPage"
import { Header } from "../../components/Header"

export default function Continent() {
  return (
    <Box>
      <Head>
        <title>Worldtrip | Europa</title>
      </Head>
      <Header />
      <BannerPage />

      <Box p="2rem" maxWidth={1160} mx="auto">
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
      </Box>
    </Box>
  )
}
