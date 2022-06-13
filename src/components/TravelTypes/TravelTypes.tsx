import { Box, Flex, HStack, Image, SimpleGrid, Text } from "@chakra-ui/react"
import TravelTypesItem from "./TravelTypesItem"

const types = [
  {
    icon: "/assets/cocktail.svg",
    description: "vida noturna",
  },
  {
    icon: "/assets/surf.svg",
    description: "praia",
  },
  {
    icon: "/assets/building.svg",
    description: "moderno",
  },
  {
    icon: "/assets/museum.svg",
    description: "clássico",
  },
  {
    icon: "/assets/earth.svg",
    description: "e mais...",
  },
]

export default function TravelTypes() {
  return (
    <Box mt={["2.25rem", "3rem", "4.5rem"]}>
      <SimpleGrid
        justifyContent="space-between"
        gridTemplateColumns={[
          "repeat(2, 1fr)",
          "repeat(3, 1fr)",
          "repeat(5, 1fr)",
        ]}
        justifyItems={["start", "center", "center"]}
        fontWeight={600}
        fontSize="1.5rem"
      >
        <TravelTypesItem itens={types} />
      </SimpleGrid>
    </Box>
  )
}
