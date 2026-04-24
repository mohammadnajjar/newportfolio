import type { Metadata } from 'next'
import './globals.css'
import { appConfig } from '@/config/app.config'

export const metadata: Metadata = {
  metadataBase: new URL(appConfig.site.url),
  title: {
    template: `%s — ${appConfig.author.name}`,
    default: appConfig.site.title,
  },
  description: appConfig.site.description,
}

// Root layout is intentionally minimal; the real <html> wrapper lives in
// app/[locale]/layout.tsx so next-intl can set the lang/dir based on locale.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children
}
