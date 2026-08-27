import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "example.com",
      },  
      {
        protocol: "https",
        hostname: "ar.pinterest.com",
      },
      {
        protocol: "https",
        hostname: "bkacontent.com",
      },
      {
        protocol: "https",
        hostname: "fulxpmtvxjdkuprjtblk.supabase.co",
      },
    ],
  },
};

export default nextConfig;
