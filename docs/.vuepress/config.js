import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Outsoar Playbook',
  description: 'Collection of best practices, guidelines, standards, recommendations, and conventions for Outsoar to provide better service.',
  base: '/playbook/',
  // theme: defaultTheme({
  //   navbar: [
  //     {
  //       text: 'Home',
  //       link: '/',
  //     },
  //   ],
  // }),
})