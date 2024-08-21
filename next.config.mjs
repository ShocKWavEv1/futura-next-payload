import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Your Next.js config here
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost", "127.0.0.1", "futura-next-payload.vercel.app"], // Add any other domains you need
  },
};

export default withPayload(nextConfig);
