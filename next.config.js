const withPWA = require("@ducanh2912/next-pwa")

module.exports = withPWA({
  pwa: {
    dest: "public", // Location for generated service worker and manifest files
    disable: process.env.NODE_ENV === "development", // Disable PWA in development
    // Add other PWA configuration options here (optional)
  },
  images: {
    domains: ["images.officex.click"], // Optimize images from your domain
  },
  reactStrictMode: true, // Enable React Strict Mode for better development experience
})