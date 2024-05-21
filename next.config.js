
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
      taint: true,
      reactCompiler: true,
  },
}
 
module.exports = nextConfig