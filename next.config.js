/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.GITHUB_PAGES === 'true' ? '/sote-sanctuary-next-app' : '',
}

module.exports = nextConfig
