/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    env: {
        IS_GITHUB_PAGES: process.env.GITHUB_PAGES === 'true',
    },
    assetPrefix: process.env.GITHUB_PAGES === true ? '/sote-sanctuary-next-app/' : '',
}

module.exports = nextConfig
