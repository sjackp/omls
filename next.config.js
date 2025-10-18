/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['images.unsplash.com', 'i.pravatar.cc'],
  },
}

module.exports = nextConfig
