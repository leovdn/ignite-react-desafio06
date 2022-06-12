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
    <Flex alignItems="center" flexDirection="column" fontWeight="600">
      <Text color="highlight" fontSize="2rem">
        {amount}
      </Text>
      <Text>{subject}</Text>
    </Flex>
  )
}
