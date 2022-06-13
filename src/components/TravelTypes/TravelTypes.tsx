import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react"
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
      <HStack justifyContent="space-between" fontWeight={600} fontSize="1.5rem">
        <TravelTypesItem itens={types} />
      </HStack>
    </Box>
  )
}
