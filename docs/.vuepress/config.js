import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Playbook',
  description: "Outsoar\'s collection of strategies, best practices, guidelines, standards, recommendations, and conventions to provide better service.",
  theme: defaultTheme({
    navbar: [
      {
        text: 'Home',
        link: '/',
      },
      {
        text: 'Guide',
        link: '/guide',
      },
      {
        text: 'About',
        link: '/about',
      },
    ],
    editLinkText: 'Edit this page on GitHub',
    logo: 'images/logo.png',
    repo: 'outsoar/playbook',
  }),
  plugins: [ docsearchPlugin({
    apiKey: '773c0bdd07d5f8f011499c70ebf1b6fa',
    indexName: 'playbook-outsoar',
    appId: 'ZWU9Y2C1JS',
    placeholder: 'Search',
    searchParameters: {
      facetFilters: ['language:en'],
    },
  })],
})