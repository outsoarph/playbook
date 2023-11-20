import { defineUserConfig, defaultTheme } from 'vuepress'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { navbar } from './config/navbar'
import { sidebar } from './config/sidebar'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Playbook',
  description: "Outsoar\'s collection of strategies, best practices, guidelines, standards, recommendations, and conventions to provide better service.",
  theme: defaultTheme({
    navbar: navbar,
    sidebar: sidebar,
    editLinkText: 'Edit on GitHub',
    logo: 'images/logo.png',
    repo: 'outsoarph/playbook',
    docsRepo: 'https://github.com/outsoarph/playbook',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
  }),
  plugins: [ docsearchPlugin({
    // apiKey: '773c0bdd07d5f8f011499c70ebf1b6fa',
    apiKey: '91062141f601231fa4b77513931e3a3f',
    indexName: 'playbook-outsoar',
    appId: 'ZWU9Y2C1JS',
    placeholder: 'Search',
    searchParameters: {
      facetFilters: ['language:en'],
    },
  })],
})