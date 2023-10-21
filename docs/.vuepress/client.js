import { defineClientConfig } from '@vuepress/client'
import LayoutCategory from './layouts/Category.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {},
  setup() {},
  rootComponents: [],
  layouts: {
    category: LayoutCategory
  },
})