import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Johannes Hulsch - Portfolio",
  description: "For Kwantlen Polytechnic University",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Teaching', link: '/teaching' },
      { text: 'Education', link: '/education' },
      { text: 'Projects', link: '/projects' },
    ],

    sidebar: [
      { text: 'Home', link: '/' },
      { text: 'Teaching', link: '/teaching' },
      { text: 'Education', link: '/education' },
      { text: 'Projects', link: '/projects' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ansaal' }
    ]
  }
})
