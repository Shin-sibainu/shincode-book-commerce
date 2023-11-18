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
        hostname: "book-thumbnail-bucket.s3.ap-northeast-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
