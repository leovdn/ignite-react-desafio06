import { Box, Flex, Image, Text } from "@chakra-ui/react"

interface CityCardProps {
  name: string
  country: string
  flag: string
  img: string
}

export default function CityCard({ name, country, img, flag }: CityCardProps) {
  return (
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
            {name}
          </Text>
          <Text fontWeight="500" fontSize="1rem" color="dark.info">
            {country}
          </Text>
        </Box>
        <Image boxSize="30px" src={flag} borderRadius="full" />
      </Flex>
    </Flex>
  )
}
