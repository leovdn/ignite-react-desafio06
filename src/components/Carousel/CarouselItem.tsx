import { Box, Image, Link, Text } from "@chakra-ui/react"

export interface CarouselItemProps {
  title: string
  slug: string
  description: string
  img: string
}

export default function CarouselItem({
  title,
  slug,
  description,
  img,
}: CarouselItemProps) {
  return (
    <Link
      href={`/continent/${slug}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image filter="brightness(0.6)" src={img} />

      <Box position="absolute" color="light.text" fontWeight="700">
        <Text fontSize={["1.5rem", "2rem", "2.25rem", "3rem"]}>{title}</Text>
        <Text fontSize={["0.875rem", "1rem", "1.25rem", "1.5rem"]}>
          {description}
        </Text>
      </Box>
    </Link>
  )
}
