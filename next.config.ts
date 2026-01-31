/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // only needed if using App Router
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // leave empty
        pathname: "/**", // allow all paths
      },
    ],
  },
};

module.exports = nextConfig;
