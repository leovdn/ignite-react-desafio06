import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { BannerProps } from "../pages"

export default function BannerHome({ bg, description, title }: BannerProps) {
  const titleFormatted = title.split("\n")
  const descriptionFormatted = description.split("\\n")

  return (
    <Box
      bgImage={`url(${bg.url})`}
      maxH={["160px", "256px", "400px", "500px"]}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      px={["1rem", "1.5rem"]}
    >
      <Flex
        maxWidth={1160}
        mx="auto"
        justifyContent="space-between"
        alignItems="center"
        py="1.5rem"
      >
        <Box flex="1">
          <Text
            as="strong"
            fontWeight="500"
            fontSize={["1.25rem", "1.5rem", "1.75rem", "2.25rem"]}
            color="light.text"
          >
            {titleFormatted[0]} <br />
            {titleFormatted[1]}
          </Text>
          <Box
            color="light.info"
            fontSize={["0.875rem", "1rem", "1rem", "1.25rem"]}
            mt=".5rem"
          >
            <Text display={["inline", "inline", "block"]}>
              {descriptionFormatted[0]}
            </Text>
            <Text display={["inline-block"]}>{descriptionFormatted[1]}</Text>
          </Box>
        </Box>

        <Image
          src="/assets/airplane.svg"
          flex="1"
          maxW={[0, 0, 280, 360]}
          mb={[0, 0, "-4rem", "-3rem"]}
        />
      </Flex>
    </Box>
  )
}
