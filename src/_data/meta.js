const siteUrl = process.env.URL || 'https://matsim.org';
const isLocalSite = /localhost|127\.0\.0\.1/.test(siteUrl);

module.exports = {
  url: siteUrl,
  membership: {
    signupApiUrl:
      process.env.MEMBERSHIP_SIGNUP_API_URL ||
      'https://membershipsignup-4lr3qlg7ya-oa.a.run.app',
    recaptchaSiteKey:
      process.env.MEMBERSHIP_RECAPTCHA_SITE_KEY ||
      '6LcD2nssAAAAAHgvhBYQ2SvkQDeT1mKmPTO__F8S'
  },
  mum2026: {
    apiBaseUrl:
      process.env.MUM2026_API_BASE_URL ||
      'https://europe-west6-matsim-membership.cloudfunctions.net/mum2026Registration',
    membershipUrl:
      process.env.MUM2026_MEMBERSHIP_URL ||
      '/association/membership/',
    registrationUrl:
      process.env.MUM2026_REGISTRATION_URL ||
      '/conferences/mum2026/register/'
  },
  // Members-only one-off events. Event date, time and meeting link deliberately
  // live in Firestore (eventsConfig/<eventId>) and are served by the API, so a
  // change to any of them does not need a site rebuild.
  seminar2026: {
    apiBaseUrl:
      process.env.SEMINAR2026_API_BASE_URL ||
      'https://europe-west6-matsim-membership.cloudfunctions.net/eventRegistration',
    membershipUrl:
      process.env.SEMINAR2026_MEMBERSHIP_URL ||
      '/association/membership/'
  },
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
