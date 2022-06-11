import { Box, Image, Link, Text } from "@chakra-ui/react"

export interface SwiperItemProps {
  title: string
  slug: string
  description: string
  img: string
}

export default function SwiperItem({
  title,
  slug,
  description,
  img,
}: SwiperItemProps) {
  return (
    <Link
      href={`/continent/${slug}`}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Image filter="brightness(0.6)" src={img} />

      <Box position="absolute" color="light.text" fontWeight="700">
        <Text fontSize="3rem">{title}</Text>
        <Text fontSize="1.5rem">{description}</Text>
      </Box>
    </Link>
  )
}
