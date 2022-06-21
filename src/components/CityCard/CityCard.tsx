import { Box, Flex, Image, Text } from "@chakra-ui/react"

interface CityCardProps {
  name: string
  country: string
  flag: string
  img: string
}

export default function CityCard({ name, country, img, flag }: CityCardProps) {
  return (
    <Flex flexDirection="column" w={256}>
      <Image src={img} borderRadius="4px 4px 0 0" h={170} objectFit="cover" />
      <Flex
        maxH="280px"
        bg="light.white"
        p={["1.125rem 1.5rem 1.5rem"]}
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px"
        borderLeft="1px"
        borderRight="1px"
        borderColor="highlight50"
        borderRadius="0 0 4px 4px"
      >
        <Box>
          <Text as="strong" fontWeight="600" fontSize="1.25rem">
            {name}
          </Text>
          <Text
            as="p"
            mt="0.75rem"
            fontWeight="500"
            fontSize="1rem"
            color="dark.info"
          >
            {country}
          </Text>
        </Box>

        <Image boxSize="30px" src={flag} borderRadius="full" />
      </Flex>
    </Flex>
  )
}
