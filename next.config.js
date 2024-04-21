const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
});

module.exports = withPWA({
  // Your Next.js config
});

module.exports = {
  images: {
    domains: ['images.officex.click'], // Replace with your domain
  },
};