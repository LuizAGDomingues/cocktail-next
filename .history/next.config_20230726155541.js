/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media-1.api-sports.io',
        port: '',
        pathname: '/football/teams/**',
      }
    ],
  },
}

module.exports = nextConfig