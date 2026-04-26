/**
 * Application-wide configuration.
 * Anything that might change between environments lives here.
 */

export const appConfig = {
  site: {
    name: 'Mohammad Najjar',
    title: 'Mohammad Najjar — Senior software engineer · Dubai',
    description:
      'Senior software engineer based in Dubai. Building SaaS products, mobile apps, and web platforms with Laravel, Flutter, and React.',
    url: 'https://mohammadnajjar.com',
    locale: 'en_US',
  },
  author: {
    name: 'Mohammad Najjar',
    role: 'Senior Software Engineer',
    location: 'Dubai, UAE',
    timezone: 'GMT+4',
    initials: 'MN',
  },
  contact: {
    email: 'mohammadnajjamgl@gmail.com',
    whatsapp: '+971501026045',
    whatsappUrl: 'https://wa.me/971501026045',
    linkedin: 'https://www.linkedin.com/in/mglnaj',
    cal: 'https://cal.com/mohammadnajjar',
  },
  stats: {
    yearsExperience: '6+',
    projectsShipped: '120+',
    teamLed: '11',
    linkedinFollowers: '25k+',
  },
} as const

export type AppConfig = typeof appConfig
