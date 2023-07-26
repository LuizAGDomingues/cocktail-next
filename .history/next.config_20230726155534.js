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
      },
      {
        protocol: 'https',
        hostname: 'media-2.api-sports.io',
        port: '',
        pathname: '/football/teams/**',
      },
      {
        protocol: 'https',
        hostname: 'media-3.api-sports.io',
        port: '',
        pathname: '/football/teams/**',
      },
      {
        protocol: 'https',
        hostname: 'media-1.api-sports.io',
        port: '',
        pathname: '/football/players/**',
      },
      {
        protocol: 'https',
        hostname: 'media-2.api-sports.io',
        port: '',
        pathname: '/football/players/**',
      },
      {
        protocol: 'https',
        hostname: 'media-3.api-sports.io',
        port: '',
        pathname: '/football/players/**',
      },
    ],
  },
}

module.exports = nextConfig