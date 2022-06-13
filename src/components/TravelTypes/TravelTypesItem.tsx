import { Flex, Image, Text } from "@chakra-ui/react"

interface TravelTypesItemProps {
  icon: string
  description: string
}

interface TravelTypesDataProps {
  itens: TravelTypesItemProps[]
}

export default function TravelTypesItem({ itens }: TravelTypesDataProps) {
  return (
    <>
      {itens.map((item) => (
        <Flex
          key={item.icon}
          flexDirection="column"
          alignItems="center"
          gap="1.5rem"
        >
          <Image src={item.icon} w={85} />
          <Text>{item.description}</Text>
        </Flex>
      ))}
    </>
  )
}
