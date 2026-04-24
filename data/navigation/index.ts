export const NAV_ITEMS = [
  { id: 'work', href: '/work', label: 'Work' },
  { id: 'services', href: '/services', label: 'Services' },
  { id: 'process', href: '/process', label: 'Process' },
  { id: 'blog', href: '/blog', label: 'Blog' },
  { id: 'faq', href: '/faq', label: 'FAQ' },
] as const

export type NavItemId = (typeof NAV_ITEMS)[number]['id']
