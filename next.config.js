/** @type {import('next').NextConfig} */

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // output: 'export',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(pdf)$/,
      type: 'asset/resource',
    });

    if (!isServer) {
      config.output.publicPath = `/_next/`;
    }

    return config;
  },
};

module.exports = nextConfig;
