import withPWA from "@ducanh2912/next-pwa"

module.exports = {
  images: {
    domains: ['images.officex.click'], // Replace with your domain
  },
};

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
});