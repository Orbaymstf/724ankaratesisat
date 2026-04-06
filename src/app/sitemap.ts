import { MetadataRoute } from 'next'
import { districts } from '@/lib/districts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://724ankaratesisat.com'

  const districtUrls = districts.map((district) => ({
    url: `${baseUrl}/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    ...districtUrls,
  ]
}
