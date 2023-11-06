/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        IS_GITHUB_PAGES: process.env.NODE_ENV === 'production' && process.env.GITHUB_PAGES === 'true',
    },
    assetPrefix: process.env.IS_GITHUB_PAGES ? '/sote-sanctuary-next-app/' : '',
}

module.exports = nextConfig
