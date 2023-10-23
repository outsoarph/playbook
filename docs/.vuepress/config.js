import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Outsoar Playbook',
  description: 'Collection of best practices, guidelines, standards, recommendations, and conventions for Outsoar to provide better service.',
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Help',
        link: '/help',
      },
      {
        text: 'About',
        link: '/about',
      },
    ],
  }),
  plugins: [ docsearchPlugin({
    apiKey: '773c0bdd07d5f8f011499c70ebf1b6fa',
    indexName: 'playbook-outsoar',
    appId: 'ZWU9Y2C1JS',
    placeholder: 'Search',
    searchParameters: {
      facetFilters: ['language:en'],
    },
  }) ],
})