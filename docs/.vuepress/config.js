import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Outsoar Playbook',
  description: 'Collection of best practices, guidelines, standards, recommendations, and conventions for Outsoar to provide better service.',
  base: '/playbook/',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Process',
        link: '/process/',
      },
      {
        text: 'Sales',
        link: '/sales/',
      },
      {
        text: 'Tech',
        link: '/tech/',
      },
      {
        text: 'Support',
        link: '/support/',
      }
    ],
  }),
})