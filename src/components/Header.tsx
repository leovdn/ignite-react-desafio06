import { Flex, Image } from "@chakra-ui/react"
import { useRouter } from "next/router"

interface HeaderProps {
  isHome?: boolean
}

export function Header({ isHome }: HeaderProps): JSX.Element {
  const router = useRouter()
  console.log(router)
  return (
    <Flex
      maxW={1160}
      h={[50, 70, 70, 100]}
      py={["1rem", "1.2rem", "1rem", "1.5rem"]}
      px={["2rem"]}
      mx="auto"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      {!isHome && (
        <Image
          src="/assets/arrow-left.svg"
          w={["1rem", "1.25rem", "1.75rem", "2rem"]}
          cursor="pointer"
          onClick={() => router.back()}
          position="absolute"
          left={["2rem"]}
        />
      )}
      <Image
        src="/assets/logo.svg"
        cursor="pointer"
        h={["1rem", "1.5rem", "2rem", "3rem"]}
        onClick={() => router.push("/")}
      />
    </Flex>
  )
}
