import withPWAInit from "@ducanh2912/next-pwa"

const withPWA = withPWAInit({
  dest: "public",
  extendDefaultRuntimeCaching: true,
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
})

export default withPWA({
  // Your Next.js config
})