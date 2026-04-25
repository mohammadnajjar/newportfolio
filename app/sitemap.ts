import type { MetadataRoute } from 'next'
import { appConfig } from '@/config/app.config'
import { getProjectDetails } from '@/lib/projects'
import { blogPostBodies } from '@/lib/blog-posts'
import { routing } from '@/lib/i18n/routing'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = appConfig.site.url
  const now = new Date()
  const staticPaths = ['', '/work', '/services', '/process', '/experience', '/blog', '/faq', '/contact']
  const projectSlugs = Object.keys(getProjectDetails('en'))
  const blogSlugs = Object.keys(blogPostBodies)

  const urls: MetadataRoute.Sitemap = []

  for (const locale of routing.locales) {
    const prefix = locale === routing.defaultLocale ? '' : `/${locale}`
    for (const path of staticPaths) {
      urls.push({ url: `${base}${prefix}${path}`, lastModified: now })
    }
    for (const slug of projectSlugs) {
      urls.push({ url: `${base}${prefix}/projects/${slug}`, lastModified: now })
    }
    for (const slug of blogSlugs) {
      urls.push({ url: `${base}${prefix}/blog/${slug}`, lastModified: now })
    }
  }

  return urls
}
