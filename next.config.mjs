/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{protocol:'https', hostname:"a.allegroimg.com"}]
    }
};

export default nextConfig;
