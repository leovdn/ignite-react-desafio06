import { Flex, Image } from "@chakra-ui/react"

export function Header(): JSX.Element {
  return (
    <Flex maxW={1160} h={100} mx="auto" p="1.5rem" justifyContent="center">
      <Image src="/assets/logo.svg" w={180} />
    </Flex>
  )
}
