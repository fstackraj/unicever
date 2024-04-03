/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.imgur.com",
      },
    ],
  },

  webpack: (config) => {
    config.resolve.alias.canvas = false;

    return config;
  },
};


export default nextConfig;
