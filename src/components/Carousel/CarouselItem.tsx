import { Box, Image, Link, Text } from "@chakra-ui/react"
import { ImageProps } from "../../pages"

export type CarouselItemProps = {
  slug: string
  title: string
  subtitle: string
  image: ImageProps
}

export default function CarouselItem({
  slug,
  title,
  subtitle,
  image,
}: CarouselItemProps) {
  return (
    <Link
      href={`/continent/${slug}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image filter="brightness(0.6)" src={image.url} />

      <Box position="absolute" color="light.text" fontWeight="700">
        <Text fontSize={["1.5rem", "2rem", "2.25rem", "3rem"]}>{title}</Text>
        <Text fontSize={["0.875rem", "1rem", "1.25rem", "1.5rem"]}>
          {subtitle}
        </Text>
      </Box>
    </Link>
  )
}
