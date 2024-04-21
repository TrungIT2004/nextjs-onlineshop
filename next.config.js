module.exports = {
  images: {
    domains: ['images.officex.click'], // Replace with your domain
  },
};

const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  reactStrictMode: true,
});