import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export', // required for static export
  images: {
    unoptimized: true, // required if you're using Next.js <Image />
  },
}

export default nextConfig
