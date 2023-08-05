/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "8090",
        pathname: "/api/files/**/*",
      },
      {
        protocol: "https",
        hostname: "barangay-appointment-services.pockethost.io",
        port: "",
        pathname: "/api/files/**/*",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/*",
      },
    ],
  },
};

module.exports = nextConfig
