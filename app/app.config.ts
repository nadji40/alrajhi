export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'slate'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Al Rajhi Bank Payment Gateway Documentation'
  },
  header: {
    title: 'Payment Gateway Documentation',
    to: '/',
    logo: {
      alt: 'Al Rajhi Bank',
      light: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Al_Rajhi_Bank_Logo.svg/1200px-Al_Rajhi_Bank_Logo.svg.png',
      dark: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Al_Rajhi_Bank_Logo.svg/1200px-Al_Rajhi_Bank_Logo.svg.png'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-lucide-external-link',
      'to': 'https://www.alrajhibank.com.sa',
      'target': '_blank',
      'aria-label': 'Al Rajhi Bank'
    }]
  },
  footer: {
    credits: `© ${new Date().getFullYear()} Al Rajhi Bank. All rights reserved.`,
    colorMode: false,
    links: [{
      'icon': 'i-lucide-globe',
      'to': 'https://www.alrajhibank.com.sa',
      'target': '_blank',
      'aria-label': 'Al Rajhi Bank Website'
    }, {
      'icon': 'i-lucide-phone',
      'to': 'tel:920003344',
      'aria-label': 'Contact Support'
    }, {
      'icon': 'i-lucide-mail',
      'to': 'mailto:support@alrajhibank.com.sa',
      'aria-label': 'Email Support'
    }]
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Support',
      edit: false,
      links: [{
        icon: 'i-lucide-life-buoy',
        label: 'Technical Support',
        to: 'mailto:support@alrajhibank.com.sa',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'API Documentation',
        to: '/getting-started',
        target: '_self'
      }]
    }
  }
})
