/**
 * Application-wide configuration.
 * Anything that might change between environments lives here.
 */

export const appConfig = {
  site: {
    name: 'Mohammad Najjar',
    title: 'Mohammad Najjar — Senior Full-Stack Engineer & Tech Lead · Dubai',
    description:
      'Senior Full-Stack Engineer and Tech Lead based in Dubai. Building production SaaS, CRM systems, web platforms, and event-driven products across 14 industries.',
    url: 'https://mohammadnajjar.com',
    locale: 'en_US',
  },
  author: {
    name: 'Mohammad Najjar',
    role: 'Senior Full-Stack Engineer & Tech Lead',
    location: 'Dubai, UAE',
    timezone: 'GMT+4',
    initials: 'MN',
  },
  contact: {
    email: 'mohammadnajjamgl@gmail.com',
    phoneDisplay: '+971 50 102 6045',
    whatsapp: '+971501026045',
    whatsappUrl: 'https://wa.me/971501026045',
    linkedin: 'https://www.linkedin.com/in/mglnaj',
    github: 'https://github.com/mohammadnajjar',
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
