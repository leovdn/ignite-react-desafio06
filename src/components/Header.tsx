import { Flex, Image } from "@chakra-ui/react"

export function Header(): JSX.Element {
  return (
    <Flex
      maxW={1160}
      h={[50, 70, 100]}
      p={[".5rem", ".7rem", "1.5rem"]}
      mx="auto"
      justifyContent="center"
    >
      <Image src="/assets/logo.svg" w={[40, 60, 80]} />
    </Flex>
  )
}
