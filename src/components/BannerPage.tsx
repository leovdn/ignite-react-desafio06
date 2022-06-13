import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export default function BannerPage() {
  return (
    <Flex
      w="100%"
      h={["150px", "256px", "400px", "500px"]}
      bgImage={`url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')`}
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
