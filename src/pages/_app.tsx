import { ChakraProvider } from "@chakra-ui/react"
import type { AppProps } from "next/app"
import { theme } from "../styles/theme"

import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/swiper.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
