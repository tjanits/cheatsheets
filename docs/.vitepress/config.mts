import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Cheatsheets",
    description: "Helps me not to do the same mistake twice",
    base: '/cheatsheets/',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/examples/markdown-examples' }
        ],

        sidebar: generateSidebar({
            documentRootPath: '/docs'
        }),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
        ]
    }
})
