import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Head from "next/head"
import BannerPage from "../../components/BannerPage"
import CityCard from "../../components/CityCard/CityCard"
import { Header } from "../../components/Header"
import NumberHighlight from "../../components/NumberHighlight/NumberHighlight"

export default function Continent() {
  const img =
    "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"

  const flag =
    "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"

  return (
    <Box>
      <Head>
        <title>Worldtrip | Europa</title>
      </Head>
      <Header />
      <BannerPage />

      <Box p="2rem" maxWidth={1160} mx="auto" mt="5rem">
        <Flex alignItems="center">
          <Text
            flex="1"
            color="dark.text"
            fontSize="1.5rem"
            fontWeight="400"
            textAlign="justify"
          >
            Apesar de não contar com um território muito extenso, a Europa é um
            continente que possui grande influência social e cultural nos demais
            continentes, afinal foi lá que surgiram os principais idiomas
            falados ao redor do mundo.
          </Text>

          <HStack flex="1" spacing="4rem" ml="4rem">
            <NumberHighlight amount={50} subject="países" />
            <NumberHighlight amount={60} subject="línguas" />
            <NumberHighlight amount={27} subject="cidades +100" />
          </HStack>
        </Flex>

        <Text color="dark.text" fontSize="2.25rem" fontWeight="500" mt="5rem">
          Cidades +100
        </Text>

        <Flex wrap="wrap" gap={8}>
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
        </Flex>
      </Box>
    </Box>
  )
}
