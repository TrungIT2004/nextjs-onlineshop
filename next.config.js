module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.officex.click',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
}

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  // workboxOptions: {
  //   runtimeCaching: [
  //     {
  //       urlPattern: ({ url }) => {
  //           return url.pathname.startsWith('/category')
  //       },
  //       handler: "CacheFirst",
  //       options: {
  //           cacheName: "catetgory",
  //           cacheableResponse: {
  //               statuses: [0, 200]
  //           }
  //           // expiration: {
  //           //     maxEntries: 4,
  //           //     maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
  //           // },
  //       }
  //     },
  //     {
  //       urlPattern: ({ url }) => {
  //           return url.pathname.startsWith('/products')
  //       },
  //       handler: "CacheFirst",
  //       options: {
  //           cacheName: "products",
  //           cacheableResponse: {
  //               statuses: [0, 200]
  //           }
  //           // expiration: {
  //           //     maxEntries: 4,
  //           //     maxAgeSeconds: 365 * 24 * 60 * 60, // 365 days
  //           // },
  //       }
  //     }
  //   ],
  // },
  cacheOnFrontEndNav: true,
});

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.officex.click',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
})