import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ['@react-pdf/renderer', '@react-pdf/font'],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.ttf$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/fonts/[name][ext]',
      },
    });
    return config
  },
};

export default nextConfig;
