// src/lib/sanity.ts
import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID ||
  import.meta.env.SANITY_PROJECT_ID

const dataset =
  import.meta.env.PUBLIC_SANITY_DATASET ||
  import.meta.env.SANITY_DATASET ||
  'production'

const apiVersion = import.meta.env.SANITY_API_VERSION || '2025-01-01'

// İsteyen: geçici debug (token sızdırmıyoruz)
if (!projectId) {
  console.warn('[Sanity] projectId missing at build!')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
})
const builder = imageUrlBuilder(client)
export const urlFor = (source: any) => builder.image(source)
export function urlForOrNull(img: any, w?: number, h?: number) {
  if (!img) return null
  try {
    let b = builder.image(img)
    if (w) b = b.width(w)
    if (h) b = b.height(h)
    return b.url()
  } catch {
    return null
  }
}
