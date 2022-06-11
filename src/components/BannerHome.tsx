import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function BannerHome() {
  return (
    <Box
      bgImage="url('/assets/bg.png')"
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      px="2rem"
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        py="1.5rem"
      >
        <Box flex="1">
          <Text fontSize="2.25rem" color="light.text">
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Text color="light.info" fontSize="1.25rem" mt="1.25rem">
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Box>
        <Image src="/assets/airplane.svg" flex="1" maxW={400} mb="-3rem" />
      </Flex>
    </Box>
  )
}
