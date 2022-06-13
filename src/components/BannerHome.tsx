import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function BannerHome() {
  return (
    <Box
      bgImage="url('/assets/bg.png')"
      maxH={["160px", "256px", "400px", "500px"]}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      px={["1rem", "1.5rem"]}
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        py="1.5rem"
      >
        <Box flex="1">
          <Text
            as="strong"
            fontWeight="500"
            fontSize={["1.25rem", "1.5rem", "1.75rem", "2.25rem"]}
            color="light.text"
          >
            5 Continentes, <br /> infinitas possibilidades.
          </Text>
          <Box
            color="light.info"
            fontSize={["0.875rem", "1rem", "1rem", "1.25rem"]}
            mt=".5rem"
          >
            <Text display={["inline", "inline", "block"]}>
              Chegou a hora de tirar do papel a viagem que você{" "}
            </Text>
            <Text display={["inline-block"]}>sempre sonhou.</Text>
          </Box>
        </Box>

        <Image
          src="/assets/airplane.svg"
          flex="1"
          maxW={[0, 0, 280, 360]}
          mb={[0, 0, "-4rem", "-3rem"]}
        />
      </Flex>
    </Box>
  )
}
