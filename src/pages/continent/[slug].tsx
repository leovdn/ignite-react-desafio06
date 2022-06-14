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
            Apesar de não contar com um território muito extenso, a Europa é um
            continente que possui grande influência social e cultural nos demais
            continentes, afinal foi lá que surgiram os principais idiomas
            falados ao redor do mundo.
          </Text>

          <HStack flex="1" spacing={["2.5rem", "3rem", "4rem"]}>
            <NumberHighlight amount={50} subject="países" />
            <NumberHighlight amount={60} subject="línguas" />
            <NumberHighlight amount={27} subject="cidades +100" />
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
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
          <CityCard img={img} name="Veneza" country="Itália" flag={flag} />
        </Flex>
      </Box>
    </Box>
  )
}
