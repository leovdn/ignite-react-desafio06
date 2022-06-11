import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"

export default function TravelTypes({}) {
  return (
    <Box maxWidth={1160} mx="auto" my="7rem">
      <HStack justifyContent="space-between" fontWeight={600} fontSize="1.5rem">
        <Flex flexDirection="column" alignItems="center">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>
      </HStack>
    </Box>
  )
}
