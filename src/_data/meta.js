module.exports = {
  url: process.env.URL || 'https://matsim.org',
  siteName: 'MATSim',
  siteDescription:
    'MATSim is the leading open-source agent-based transport simulation software.',
  siteType: 'Organization',
  locale: 'en_EN',
  lang: 'en',
  skipContent: 'Skip to content',
  author: 'MATSim Community',
  authorEmail: 'info@matsim.org',
  authorWebsite: 'https://matsim.org/association',
  themeColor: '#0D2B58', //  Manifest: defines the default theme color for the application
  themeBgColor: '#4674B9', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
  meta_data: {
    opengraph_default: '/assets/images/opengraph-default.png', // fallback/default meta image
    opengraph_default_alt:
      'Visible content: MATSim is the leading open-source agent-based transport simulation software ', // alt text for default meta image
    twitterSite: '', // i.e. @site - twitter profile of the site
    twitterCreator: '', // i.e. @author -  twitter profile of the site
    mastodonProfile: ''
  },
  blog: {
    // this is for the rss feed
    name: 'News from MATSim',
    description:
      'Learn about the latest news and changes in MATSim.'
  },
  pagination: {
    itemsPerPage: 20
  },
  address: {
    // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
    firma: 'MATSim Association',
    street: 'Gubelstrasse 28',
    city: 'Zurich',
    zip: '8050',
    country: 'Switzerland',
    mobileDisplay: '',
    mobileCall: '',
    email: 'info@matsim.org',
    cif: ''
  },
  menu: {
    closedText: 'Menu'
  }
};
