import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Good Email Code',
  description: 'Email code resources and examples for HTML email developers',
  lang: 'en-GB',
  cleanUrls: true,
  base: '/goodemailcode.com/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    ['meta', { name: 'twitter:site', content: '@M_J_Robbins' }],
    ['meta', { name: 'twitter:creator', content: '@M_J_Robbins' }],
  ],
  transformPageData: (pageData) => {
    pageData.frontmatter.head ??= []

    const isHome = pageData.frontmatter.layout === 'home'

    // <title> tag
    pageData.frontmatter.head.push(['title',
      {},
      isHome
        ? pageData.frontmatter.title
        : `${pageData.frontmatter.title} | Good Email Code`
    ])

    // Open Graph meta tags
    pageData.frontmatter.head.push(['meta', { 
      property: 'og:title', 
      content: isHome 
        ? pageData.frontmatter.title
        : `${pageData.frontmatter.title} | Good Email Code`
    }])

    pageData.frontmatter.head.push(['meta', { 
      property: 'og:description', 
      content: pageData.frontmatter.description 
    }])

    pageData.frontmatter.head.push(['meta', { 
      property: 'og:type', 
      content: isHome ? 'website' : 'article'
    }])

    pageData.frontmatter.head.push(['meta', { 
      property: 'og:url', 
      content: isHome
        ? 'https://goodemailcode.com'
        : `https://goodemailcode.com/${pageData.relativePath.replace('.md', '')}`
    }])    
  },
  sitemap: {
    hostname: 'https://goodemailcode.com'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.svg',
    // siteTitle: false,
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Code', link: '/email-code/template' },
      { text: 'Enhancements', link: '/email-enhancements/faux-absolute-position' },
      { text: 'Accessibility', link: '/email-accessibility/rem-and-em' },
    ],
    sidebar: [
      {
        text: 'Code',
        items: [
          { text: 'Base Template', link: '/email-code/template' },
          { text: 'Preview Text', link: '/email-code/preheader' },
          { text: 'Container', link: '/email-code/container' },
          { text: 'Columns', link: '/email-code/columns' },
          { text: 'Text', link: '/email-code/text' },
          { text: 'CTA Link', link: '/email-code/link-button' },
          { text: 'Horizontal rule', link: '/email-code/hr' },
          { text: 'Spacing', link: '/email-code/spacing' },
        ]
      },
      {
        text: 'Enhancements',
        items: [
          { text: 'Absolute Position', link: '/email-enhancements/faux-absolute-position' },
          { text: 'Gmail Image Popups', link: '/email-enhancements/stop-gmail-image-popup' },
          { text: 'CSS Triangles', link: '/email-enhancements/css-triangles' },
          { text: 'CSS Art', link: '/email-enhancements/css-art' },
          { text: 'SVG in Email', link: '/email-enhancements/svg' },
          { text: 'SVG to VML', link: '/email-enhancements/svg-to-vml' },
          { text: 'Picture', link: '/email-enhancements/picture' },
          { text: 'Text Shadow', link: '/email-enhancements/text-shadow' },
          { text: 'MSO Styles', link: '/email-enhancements/mso-styles' },
        ]
      },
      {
        text: 'Accessibility',
        items: [
          { text: 'REM and EM units', link: '/email-accessibility/rem-and-em' },
          { text: '&lt;h1&gt; in email', link: '/email-accessibility/should-you-use-an-h1-in-email-code' },
          { text: 'ARIA Landmarks', link: '/email-accessibility/aria-landmarks-in-html-email' },
          { text: 'Text in Images', link: '/email-accessibility/text-in-images' },
          { text: 'Visually Hidden Text', link: '/email-accessibility/visually-hidden-text' },
          { text: 'Table Layouts', link: '/email-accessibility/table-layouts' },
        ]
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/M-J-Robbins/good-email-code' },
      { icon: 'twitter', link: 'https://twitter.com/M_J_Robbins' },
    ]
  }
})
