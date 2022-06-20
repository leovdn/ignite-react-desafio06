import * as prismic from "@prismicio/client"
import { HttpRequestLike } from "@prismicio/client"
import { enableAutoPreviews } from "@prismicio/next"

export interface PrismicConfig {
  req?: HttpRequestLike
}

export function getPrismicClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(String(process.env.PRISMIC_ENDPOINT), {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  })

  enableAutoPreviews({
    client,
    req: config.req,
  })

  return client
}
