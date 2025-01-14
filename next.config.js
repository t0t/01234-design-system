/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/modern-design-system' : '',
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;