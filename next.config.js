module.exports = {
  images: {
    domains: ['images.officex.click'], // Replace with your domain
  },
};

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  workboxOptions: {
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
            return url.pathname.startsWith('/category')
        },
        handler: "CacheFirst",
        options: {
            cacheName: "products",
            cacheableResponse: {
                statuses: [0, 200]
            }
            // expiration: {
            //     maxEntries: 4,
            //     maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
            // },
        }
      }
    ],
  },
});

module.exports = withPWA({
  // Your Next.js config
});