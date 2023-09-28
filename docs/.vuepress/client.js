import { defineClientConfig } from '@vuepress/client'
import LayoutIndex from './layouts/Index.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
  layouts: {
    LayoutIndex
  },
})