import type { MetadataRoute } from 'next'
import { appConfig } from '@/config/app.config'
import { projectDetails } from '@/lib/projects'
import { blogPostBodies } from '@/lib/blog-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = appConfig.site.url
  const now = new Date()

  const staticRoutes = ['', '/work', '/services', '/process', '/blog', '/faq', '/contact'].map(
    path => ({
      url: `${base}${path}`,
      lastModified: now,
    }),
  )

  const projectRoutes = Object.keys(projectDetails).map(slug => ({
    url: `${base}/projects/${slug}`,
    lastModified: now,
  }))

  const blogRoutes = Object.keys(blogPostBodies).map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...projectRoutes, ...blogRoutes]
}
