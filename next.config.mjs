/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns:[{protocol:'https', hostname:"a.allegroimg.com"},{protocol:'https', hostname:"b.allegroimg.com"},{protocol:'https', hostname:"c.allegroimg.com"}, {protocol:'https', hostname:"d.allegroimg.com"},{protocol:'https', hostname:"e.allegroimg.com"},{protocol:'https', hostname:"a.allegroimd.com"},{protocol:'https', hostname:"b.allegroimd.com"},{protocol:'https', hostname:"c.allegroimd.com"}, {protocol:'https', hostname:"d.allegroimd.com"},{protocol:'https', hostname:"e.allegroimd.com"}, {protocol:'https', hostname:"2.allegroimg.com"},{protocol:'https', hostname:"1.allegroimg.com"}, {protocol:'https', hostname:"0.allegroimg.com"},{protocol:'https', hostname:"f.allegroimg.com"},{protocol:'https', hostname:"9.allegroimg.com"}]
    }
};

export default nextConfig;
