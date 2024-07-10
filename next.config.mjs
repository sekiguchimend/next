/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
      NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
      NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN,
      NEXT_PUBLIC_MICROCMS_API_KEY: process.env.NEXT_PUBLIC_MICROCMS_API_KEY,
    },
  }
  // next.config.js

 export default nextConfig