import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    highlight: "#FFBA08",
    highlight50: "rgba(255, 186, 8, 0.5)",
    dark: {
      black: "#000",
      text: "#47585B",
      info: "#999999",
      info50: "rgba(153, 153, 153, 0.5)",
    },
    light: {
      white: "#fff",
      text: "#F5F8FA",
      info: "#DADADA",
    },
  },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  styles: {
    global: {
      html: {
        fontSize: "16px",
      },
      body: {
        bg: "light.text",
        color: "dark.text",
      },
    },
  },
})
