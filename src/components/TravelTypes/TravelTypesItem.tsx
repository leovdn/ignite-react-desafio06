import { Box, Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react"

interface TravelTypesItemProps {
  icon: string
  description: string
}

interface TravelTypesDataProps {
  itens: TravelTypesItemProps[]
}

export default function TravelTypesItem({ itens }: TravelTypesDataProps) {
  const isMobile = useBreakpointValue({
    base: false,
    md: true,
  })

  return (
    <>
      {itens.map((item) => (
        <Flex
          key={item.icon}
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
          <Image src={item.icon} w={[0, 0, "64px", "80px"]} />
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
