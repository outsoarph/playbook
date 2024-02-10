import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { navbar } from "./config/navbar";
import { sidebar } from "./config/sidebar";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
    lang: "en-US",
    title: "Playbook",
    description:
        "Outsoar's collection of strategies, best practices, guidelines, standards, recommendations, and conventions to provide better service.",
    head: [
        ['link', { rel: 'icon', href: '/images/favicon.ico' }]
    ],
    bundler: viteBundler(),
    theme: defaultTheme({
        navbar: navbar,
        sidebar: sidebar,
        editLinkText: "Edit on GitHub",
        logo: "images/logo.png",
        repo: "outsoarph/playbook",
        docsRepo: "https://github.com/outsoarph/playbook",
        docsBranch: "main",
        docsDir: "docs",
        editLinkPattern: ":repo/edit/:branch/:path",
    }),
    plugins: [
        docsearchPlugin({
            apiKey: "329016198726b3f531f2a9fc4398509f",
            indexName: "playbook-outsoar",
            appId: "ZWU9Y2C1JS",
            placeholder: "Search",
        }),
        sitemapPlugin({
            hostname: "https://playbook.outsoar.ph/",
        }),
    ],
})