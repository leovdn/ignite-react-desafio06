import { Box, SimpleGrid } from "@chakra-ui/react"
import { TravelTypeProps } from "../../pages"
import TravelTypesItem from "./TravelTypesItem"

export interface TravelItems {
  types: TravelTypeProps[]
}

export default function TravelTypes({ types }: TravelItems) {
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
        <TravelTypesItem types={types} />
      </SimpleGrid>
    </Box>
  )
}
