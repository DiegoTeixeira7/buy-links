const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
const isDev =
  appUrl.includes('localhost') ||
  appUrl.includes('dev') ||
  appUrl.includes('staging') ||
  appUrl.includes('stg')

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: appUrl,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: isDev ? '/' : '',
      },
    ],
  },
  transform: async (config, path) => {
    if (isDev) {
      return {}
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    }
  },
}
