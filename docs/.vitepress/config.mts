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
            { text: 'Docs', link: '/arch/bluetooth' }
        ],

        sidebar: generateSidebar({
            documentRootPath: '/docs',
            collapsed: true
        }),

        socialLinks: [
            { icon: 'github', link: 'https://github.com/tjanits' },
            { icon: 'github', link: 'https://github.com/pdamianik'}
        ]
    }
})
