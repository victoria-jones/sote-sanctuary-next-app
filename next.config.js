/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
    // Add basePath
    basePath: '/github-pages',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
