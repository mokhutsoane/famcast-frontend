module.exports = {
  siteUrl: "https://famcast.co.za/q/",
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ["/api", "/api/contactapi/"],
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "test-bot",
        allow: ["/radio-mobile-apps", "/blog"],
      },
      {
        userAgent: "black-listed-bot",
        disallow: ["/api/", "/payfast/", "*.php$"],
      },
    ],
    additionalSitemaps: ["https://www.famcast.co.za/home/sitemap.xml"],
  },
};
