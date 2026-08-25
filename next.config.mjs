/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "karmer.uludag.edu.tr", pathname: "/**" },
    ],
  },
};

export default nextConfig;
