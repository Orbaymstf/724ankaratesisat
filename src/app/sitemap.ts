import { MetadataRoute } from 'next'
import { districts } from '@/lib/districts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://724ankaratesisat.com'

  const districtUrls = districts.map((district) => ({
    url: `${baseUrl}/${district.slug}-tesisatci`,
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
    {
      url: `${baseUrl}/su-kacagi-tespiti`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tikaniklik-acma`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/klozet-tamiri`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/petek-temizligi`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/daire-ici-tadilat-ve-yenileme`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...districtUrls,
  ]
}
