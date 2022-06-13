import { Flex, Text } from "@chakra-ui/react"

interface NumberHighlightProps {
  amount: number | string
  subject: string
}

export default function NumberHighlight({
  amount,
  subject,
}: NumberHighlightProps) {
  return (
    <Flex
      alignItems={["flex-start", "flex-start", "center"]}
      flexDirection="column"
    >
      <Text
        as="strong"
        fontWeight="600"
        color="highlight"
        fontSize={["1.5rem", "1.5rem", "2rem"]}
      >
        {amount}
      </Text>
      <Text fontWeight={["400", "400", "600"]}>{subject}</Text>
    </Flex>
  )
}
