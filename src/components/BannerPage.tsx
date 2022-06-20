import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

interface BannerPageProps {
  banner: string
}

export default function BannerPage({ banner }: BannerPageProps) {
  return (
    <Flex
      w="100%"
      h={["150px", "256px", "400px", "500px"]}
      bgImage={`url(${banner})`}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Flex
        backdropFilter="brightness(0.65)"
        w="100%"
        h="100%"
        align={["center", "center", "end"]}
        justify={["center", "center", "start"]}
      >
        <Heading
          maxW={1160}
          w="100%"
          mx="auto"
          px={["2rem"]}
          pb={[0, 0, "1rem", "2rem"]}
          textAlign={["center", "center", "left"]}
          fontSize={["1.75rem", "2rem", "5xl"]}
          color="gray.100"
          fontWeight={["600", "600", "700"]}
        >
          Europa
        </Heading>
      </Flex>
    </Flex>
  )
}
