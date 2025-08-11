/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // 开发环境配置 - 允许所有局域网访问
  allowedDevOrigins: [
    // 常见的私有网络段
    '192.168.*.*',    // 家庭/办公网络
    '10.*.*.*',       // 企业网络
    '172.16.*.*',     // Docker 网络
    '172.17.*.*',
    '172.18.*.*',
    '172.19.*.*',
    '172.20.*.*',
    '172.21.*.*',
    '172.22.*.*',
    '172.23.*.*',
    '172.24.*.*',
    '172.25.*.*',
    '172.26.*.*',
    '172.27.*.*',
    '172.28.*.*',
    '172.29.*.*',
    '172.30.*.*',
    '172.31.*.*',
    // 本地访问
    'localhost',
    '127.0.0.1',
    '0.0.0.0',
  ],
}

export default nextConfig