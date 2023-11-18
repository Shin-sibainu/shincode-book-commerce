/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "ql3cigfivm9i6prq.public.blob.vercel-storage.com",
      },
    ],
  },
};

module.exports = nextConfig;
