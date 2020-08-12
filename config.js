const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://health.lancegoyke.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: '',
    logoLink: 'https://health.lancegoyke.com/',
    title: "Lance's Health Tracking",
    githubUrl: 'https://github.com/lancegoyke/health-tracking',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      // '/introduction', // add trailing slash if enabled above
      // '/codeblock',
      '/my-case',
      '/herbal-antimicrobials',
    ],
    collapsedNav: [
      // '/herbal-antimicrobials', // add trailing slash if enabled above
    ],
    links: [{ text: 'LanceGoyke.com', link: 'https://lancegoyke.com' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://record.lancegoyke.com/'>record </a><div class='greenCircle'></div><a href='https://lancegoyke.com/business-development'>business</a>",
  },
  siteMetadata: {
    title: 'Health Tracking | Lance Goyke',
    description:
      'Following treatment of various health abnormalities, including memory, fatigue, and small intestinal bacterial overgrowth (SIBO) ',
    ogImage: null,
    docsLocation: 'https://github.com/lancegoyke/health-tracking/tree/master/content',
    favicon: '',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
