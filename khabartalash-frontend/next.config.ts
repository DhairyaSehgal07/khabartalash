/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http", // Allow HTTP images (for localhost during development)
        hostname: "localhost",
        port: "5000", // Specify the port for the local server
      },
    ],
  },
};

export default nextConfig;
