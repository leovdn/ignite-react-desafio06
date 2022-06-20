import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"
import { TravelItems } from "./TravelTypes"

export default function TravelTypesItem({ types }: TravelItems) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
      {types.map((item) => (
        <Flex
          key={item.icon.url}
          flexDirection="column"
          alignItems="center"
          gap="1.5rem"
          _last={[
            {
              justifySelf: "flex-end",
            },
            {
              justifySelf: "center",
            },
          ]}
        >
          <Image src={item.icon.url} w={[0, 0, "64px", "80px"]} />
          <Flex gap="8px">
            {!isMobile && <Text color="highlight">•</Text>}
            <Text
              fontSize={["1.125rem", "1.25rem", "1.25rem", "1.5rem"]}
              fontWeight={["500", "500", "600"]}
            >
              {item.description}
            </Text>
          </Flex>
        </Flex>
      ))}
    </>
  )
}
