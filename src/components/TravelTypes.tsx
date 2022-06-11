import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"

export default function TravelTypes({}) {
  return (
    <Box mt="4.5rem">
      <HStack justifyContent="space-between" fontWeight={600} fontSize="1.5rem">
        <Flex flexDirection="column" alignItems="center" gap="1.5rem">
          <Image src="/assets/cocktail.svg" w={85} />
          <Text>vida noturna</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="1.5rem">
          <Image src="/assets/surf.svg" w={85} />
          <Text>praia</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="1.5rem">
          <Image src="/assets/building.svg" w={85} />
          <Text>moderno</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="1.5rem">
          <Image src="/assets/museum.svg" w={85} />
          <Text>clássico</Text>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="1.5rem">
          <Image src="/assets/earth.svg" w={85} />
          <Text>e mais...</Text>
        </Flex>
      </HStack>
    </Box>
  )
}
