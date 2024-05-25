const BLOG = {
  title: 'CRAIGARY',
  author: 'Craig Hart',
  email: 'i@craigary.net',
  link: 'https://nobelium.vercel.app',
  description: 'This gonna be an awesome website.',
  lang: 'en-US', // Language setting: ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  timezone: 'Asia/Shanghai', // Your Notion posts' date will be interpreted as this timezone.
  appearance: 'auto', // Appearance settings: ['light', 'dark', 'auto']
  font: 'sans-serif', // Font options: ['sans-serif', 'serif']
  lightBackground: '#ffffff', // Light mode background color (use hex value, include '#')
  darkBackground: '#18181B', // Dark mode background color (use hex value, include '#')
  path: '', // Leave this empty unless you want to deploy Nobelium in a subfolder
  since: 2021, // If left empty, the current year will be used.
  postsPerPage: 7,
  sortByDate: false,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // Automatically collapse the navigation bar
  ogImageGenerateURL: 'https://og-image-craigary.vercel.app', // The URL to generate OG images, don't end with a slash
  socialLink: 'https://twitter.com/craigaryhart',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove or replace with your Google Site Verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS!!!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Use if you prefer not to make your database public
  analytics: {
    provider: '', // Analytics provider: fill with 'ga' (Google Analytics) or 'ackee', leave empty to disable
    ackeeConfig: {
      tracker: '', // e.g., 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g., 'https://ackee.craigary.net', don't end with a slash
      domainId: '' // e.g., '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g., 'G-XXXXXXXXXX'
    }
  },
  comment: {
    // Supported providers: gitalk, utterances, cusdis
    provider: '', // Leave empty if you don't need a comment plugin
    gitalkConfig: {
      repo: '', // The repository to store comments
      owner: '',
      admin: [],
      clientID: '',
      clientSecret: '',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: '' // The repository for utterances comments
    },
    cusdisConfig: {
      appId: '', // data-app-id
      host: 'https://cusdis.com', // data-host, change if using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // Change if using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // Distinguish between development and production environment
}

// Export the configuration object
module.exports = BLOG
