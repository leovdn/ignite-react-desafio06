import type { AppProps } from "next/app"
import Link from "next/link"

import { ChakraProvider } from "@chakra-ui/react"

import { PrismicProvider } from "@prismicio/react"
import { PrismicPreview } from "@prismicio/next"
import { linkResolver, repositoryName } from "../../prismicio"

import { theme } from "../styles/theme"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "../styles/swiper.css"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={({ href, children, ...props }) => (
        <Link href={href}>
          <a {...props}>{children}</a>
        </Link>
      )}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </PrismicPreview>
    </PrismicProvider>
  )
}

export default MyApp
