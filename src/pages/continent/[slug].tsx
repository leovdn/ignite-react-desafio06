import { Box, Divider, Flex, HStack, Image, Text } from "@chakra-ui/react"
import Head from "next/head"
import BannerPage from "../../components/BannerPage"
import { Header } from "../../components/Header"

export default function Continent() {
  const img =
    "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80"
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
            <Flex alignItems="center" flexDirection="column" fontWeight="600">
              <Text color="highlight" fontSize="2rem">
                50
              </Text>
              <Text>países</Text>
            </Flex>

            <Flex alignItems="center" flexDirection="column" fontWeight="600">
              <Text color="highlight" fontSize="2rem">
                60
              </Text>
              <Text>línguas</Text>
            </Flex>

            <Flex alignItems="center" flexDirection="column" fontWeight="600">
              <Text color="highlight" fontSize="2rem">
                27
              </Text>
              <Text>cidades +100</Text>
            </Flex>
          </HStack>
        </Flex>

        <Text color="dark.text" fontSize="2.25rem" fontWeight="500" mt="5rem">
          Cidades +100
        </Text>

        <Flex flexDirection="column" w={256} mt="2.5rem">
          <Image src={img} borderRadius="4px 4px 0 0" />
          <Flex
            maxH="280px"
            bg="light.white"
            p="1.5rem"
            justifyContent="space-between"
            alignContent="center"
            borderBottom="1px"
            borderLeft="1px"
            borderRight="1px"
            borderColor="highlight50"
            borderRadius="0 0 4px 4px"
          >
            <Box>
              <Text fontWeight="600" fontSize="1.25rem">
                Venice
              </Text>
              <Text fontWeight="500" fontSize="1rem" color="dark.info">
                Itália
              </Text>
            </Box>
            <Image
              boxSize="30px"
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg"
              borderRadius="full"
            />
          </Flex>
        </Flex>
      </Box>
    </Box>
  )
}
