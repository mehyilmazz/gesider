/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.gesider.org", pathname: "/**" },
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "karmer.uludag.edu.tr", pathname: "/**" },
      { protocol: "https", hostname: "scaleup.endeavor.org.tr", pathname: "/**" },
      { protocol: "https", hostname: "media.licdn.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
