import { Flex, Text } from "@chakra-ui/react"

export default function BannerPage() {
  return (
    <Flex
      height={500}
      w="100%"
      _before={{
        content: '""',
        position: "absolute",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
        width: "100%",
        height: "500px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        filter: "brightness(0.75)",
      }}
    >
      <Flex
        flex="1"
        maxWidth={1160}
        mx="auto"
        px="2rem"
        alignItems="end"
        position="relative"
      >
        <Text color="light.text" fontSize="3rem" fontWeight="700" mb="4rem">
          Europa
        </Text>
      </Flex>
    </Flex>
  )
}
