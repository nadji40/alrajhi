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

  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
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

  llms: {
    domain: 'https://arb-payment-gateway-docs.com/',
    title: 'Al Rajhi Bank Payment Gateway Documentation',
    description: 'Comprehensive REST API integration guide for Al Rajhi Bank Payment Gateway with PHP examples and implementation details.',
    full: {
      title: 'Al Rajhi Bank Payment Gateway - Complete API Documentation',
      description: 'Complete REST API integration documentation for Al Rajhi Bank Payment Gateway including PHP code examples, transaction flows, and troubleshooting guides.'
    },
    sections: [
      {
        title: 'Introduction',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/introduction%' }
        ]
      },
      {
        title: 'Getting Started',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/getting-started%' }
        ]
      },
      {
        title: 'Transaction Flow',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/transaction-flow%' }
        ]
      },
      {
        title: 'Troubleshooting',
        contentCollection: 'docs',
        contentFilters: [
          { field: 'path', operator: 'LIKE', value: '/troubleshooting%' }
        ]
      }
    ]
  }
})
