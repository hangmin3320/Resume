/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // This is needed for GitHub Pages deployment at https://hangmin3320.github.io/Resume/
  basePath: '/Resume',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
