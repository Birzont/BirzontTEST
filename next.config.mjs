/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',               // Static Export 모드
  basePath: '/BirzontTEST',           // Github 레포 이름 정확히
  assetPrefix: '/BirzontTEST/',
  images: {
    unoptimized: true,             // 이미지 최적화 끔
  },
  trailingSlash: true,             // 경로 끝에 / 붙여서 Github Pages 호환
  experimental: {
    appDir: true,                  // v0.dev 기반이면 무조건 켜야 함
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;