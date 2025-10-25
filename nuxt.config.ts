// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
    'nuxt-llms'
  ],

  experimental: {
    payloadExtraction: false
  },

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },

  compatibilityDate: '2024-07-11',

  ssr: true,
  
  nitro: {
    preset: 'vercel'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    provider: 'iconify'
  },

  build: {
    transpile: ['mermaid']
  },

  llms: {
    domain: 'https://alrajhi.vercel.app/',
    title: 'Al Rajhi Bank Payment Gateway Documentation',
    description: 'Comprehensive REST API integration guide for Al Rajhi Bank Payment Gateway with examples in PHP, JavaScript, cURL and implementation details for any programming language.',
    full: {
      title: 'Al Rajhi Bank Payment Gateway - Complete API Documentation',
      description: 'Complete REST API integration documentation for Al Rajhi Bank Payment Gateway including code examples in PHP, JavaScript, cURL, transaction flows, and troubleshooting guides for any programming language.'
    },
    sections: [
      {
        title: 'Introduction',
        contentCollection: 'content',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/introduction%' }
        ]
      },
      {
        title: 'Getting Started',
        contentCollection: 'content',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Transaction Flow',
        contentCollection: 'content',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/transaction-flow%' }
        ]
      },
      {
        title: 'Troubleshooting',
        contentCollection: 'content',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/troubleshooting%' }
        ]
      }
    ]
  }
})
